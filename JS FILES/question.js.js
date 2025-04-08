function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.textContent = "+";
    } else {
        answer.style.display = "block";
        arrow.textContent = "-";
    }
}
