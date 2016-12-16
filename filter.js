var stories = document.getElementsByClassName('userContentWrapper');
var terms = ['ביבי',
             'נתניהו',
             'ליכוד',
             'מירי רגב',
             'אורן חזן',
             'גלאון',
             'לפיד',
             'יש עתיד',
             'הימין',
             'סמול',
             'טרור',
             'ערבים',
             'יחימוביץ',
             'אקיבוש',
             'הבית היהודי',
             'בנט',
             'אורן חזן',
             'ליברמן',
             'טראמפ',
             'השמאל',
             'כיבוש',
             'סתיו שפיר',
             'אלדד יניב',
             'אדלסון',
             'זועבי',
             'התנחלות',
             'התנחלויות',
             'כנסת ישראל',
             'ריבלין',
             'המדינה',
             'ח"כ',
             'בוגדים',
             'אינתיפאד',
             'איילת שקד',
             'גיס חמישי',
             'עניי עירך',
             'הקם להורגך',
             'הפוסל במומו',
             'חמאס',
             'חיזבאללה',
             'עזה',
             'דאע״ש'
            ];

var lastRefresh = null;

function filter_politics(timestamp) {
  if (!lastRefresh){
    lastRefresh = 0;
  }
  var newRefresh = timestamp.timeStamp;
  console.log(newRefresh - lastRefresh);
  if (newRefresh - lastRefresh >= 750 || lastRefresh === null){
    for (var story of stories) {
      html = story.innerHTML;
      for (var term of terms){
        var regex_term = new RegExp(term);
        if (regex_term.test(html) === true) {
          console.log('found term: ', term);
          story.style.display = 'none';
          break;
        }
      }
    }
    lastRefresh = newRefresh;
  }
}
document.addEventListener('scroll',filter_politics);
