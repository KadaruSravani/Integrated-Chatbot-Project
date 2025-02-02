var video = document.getElementById("myVideo");
function validateForm() {
    const companyName = document.getElementById("company-name").value.trim();
    const companyWebsite = document.getElementById("company-website").value.trim();
    const submitButton = document.getElementById("submit-button");
    if (companyName !== "" && companyWebsite !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
function submitCompanyInfo() {
    document.getElementById("webpage-status").style.display = "block";
    loadWebpages();
}

function fetchMetaDescription() {
    const websiteUrl = document.getElementById('company-website').value;
    if (websiteUrl) {
        const simulatedMetaDescription = "  BeyondChats specializes in chatbot solutions for websites, transforming your site traffic into valuable leads. Our services encompass a range of vital functions including resolving customer queries, enhancing brand awareness, promoting services, and generating leads. Through our chatbot integrations, businesses can offer exceptional customer support experiences, fostering satisfaction and loyalty. Moreover, we excel in guiding businesses toward converting their website visitors into actual customers, driving growth and success.";
        document.getElementById('company-description').value = simulatedMetaDescription;
    }
}

const webpages = [
    {  url: "Homepage", status: "scraped", data: ["Welcome to BeyondChats!", "We help businesses engage customers with AI chatbots."] },
    {  url: "About Us", status: "scraped", data: ["BeyondChats specializes in chatbot solutions.", "Our AI bots provide customer support and lead generation."] },
    {  url: "Services", status: "scraped", data: ["Live Chat Automation", "24/7 Customer Support", "Lead Capture & CRM Integration"] },
    {  url: "Contact", status: "pending", data: [] },
];
function loadWebpages() {
    const webpageList = document.getElementById("webpage-list");
    webpageList.innerHTML = "";

    webpages.forEach(page => {
        const listItem = document.createElement("li");
        listItem.className = "webpage-item";

        listItem.innerHTML = `
            <span>${page.url} - <span class="${page.status === 'scraped' ? 'scraped' : 'pending'}">${page.status === 'scraped' ? "✅ Scraped" : "⏳ Pending"}</span></span>
            <button class="view-button" onclick="viewData('${page.data}')" ${page.status === 'pending' ? 'disabled' : ''}>🔍 View Data</button>
        `;

        webpageList.appendChild(listItem);
    });
}

function viewData(data) {
    document.getElementById("scraped-data").innerText = data;
    document.getElementById("data-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("data-modal").style.display = "none";
}

window.onload = loadWebpages;

let trainingProgress = 0;
let trainingInterval;

function startTraining() {
    trainingInterval = setInterval(() => {
        if (trainingProgress < 100) {
            trainingProgress += 5;
            document.getElementById('training-progress').style.width = `${trainingProgress}%`;
            document.getElementById('training-status-text').textContent = `Training in progress... (${trainingProgress}%)`;
        } else {
            clearInterval(trainingInterval);
            document.getElementById('training-status-text').textContent = "Training Complete!";
            document.getElementById('wait-button').disabled = true;
        }
    }, 1000);
}
startTraining();

function waitForTraining() {
    if (trainingProgress < 100) {
        alert("Please wait, the training is still in progress...");
    } else {
        alert("Training is complete!");
    }
}
function moveToNextStep() {
    if (trainingProgress < 100) {
        alert("Training is still in progress, but you're moving to the next step.");
    } else {
        alert("Training is complete. Proceeding to the next step!");
        window.location.href = "third.html";
    }

}
