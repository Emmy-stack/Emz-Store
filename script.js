const sentences = [
  "Level up your setup right now.",
  "Gear built for serious players.",
  "Dominate every game in style.",
  "Next-gen tech for next-gen wins.",
  "Deals you don't want to miss!",
];

const speed = 100; // typing speed (ms)
const delayBetweenSentences = 1000; // pause between sentences (ms)
let sentenceIndex = 0;
let charIndex = 0;

function typeSentence() {
  const currentSentence = sentences[sentenceIndex];
  const autotypeDiv = document.getElementById("autotype");

  if (charIndex < currentSentence.length) {
    autotypeDiv.textContent += currentSentence.charAt(charIndex);
    charIndex++;
    setTimeout(typeSentence, speed);
  } else {
    // Done with this sentence
    setTimeout(() => {
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      charIndex = 0;
      autotypeDiv.textContent = "";
      typeSentence();
    }, delayBetweenSentences);
  }
}

window.onload = typeSentence;

const slides = document.getElementById("slides");
const dotsContainer = document.getElementById("dots");
const totalSlides = slides.children.length;
let currentIndex = 0;
let autoplay = true;

function showSlide(index) {
  if (index < 0) currentIndex = totalSlides - 1;
  else if (index >= totalSlides) currentIndex = 0;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

function createDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function autoPlaySlides() {
  if (autoplay) {
    moveSlide(1);
  }
}

createDots();
showSlide(0);
setInterval(autoPlaySlides, 2000); // 2 seconds interval

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
