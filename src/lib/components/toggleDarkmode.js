export default function toggleDarkmode() {
    const body = document.body;
    if(body.classList.contains("dark-mode")) body.classList.remove("dark-mode");
    else body.classList.add("dark-mode");
}