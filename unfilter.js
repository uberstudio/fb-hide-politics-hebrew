setTimeout(function() {
  document.removeEventListener('scroll',filter_politics, false);
}, 100);

stories = document.getElementsByClassName('userContentWrapper');

for (var story of stories) {
  story.style.display = 'block';
}
