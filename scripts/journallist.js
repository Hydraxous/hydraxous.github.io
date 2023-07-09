class JournalEntry {
    constructor(obj)
    {
        obj && Object.assign(this, obj);
    }

    getRawHtml()
    {
        return `<div class="h-fit bg-veryDarkBlue border-4 border-darkBlue rounded-md">
        <div class="flex flex-col md:flex-row">
            <img src="/${this.ThumbnailURL}" alt="${this.ThumbnailAltText}" class="m-4 w-1/2 self-center md:w-1/6 rounded-md border-4 border-darkBlue">
            <div class="flex flex-col w-full p-2 md:p-4">
                <div class="flex flex-col md:flex-row justify-between w-full">
                    <h1 class="text-5xl text-coolWhite font-bold">${this.Name}</h1>
                    <h2 class="p-2 text-2xl text-lapis">${this.Version}</h2>
                </div>
                <div class="flex justify-between mb-2 h-12">
                    <a href="${this.PlatformURL}"><h2 class="text-2xl text-skyBlue pt-2">${this.Platform}</h2></a>
                    <div class=" flex space-x-2 text-skyBlue">
                        <a href="${this.GithubURL}" class=" bg-darkBlue p-2 rounded-md hover:text-darkBlue hover:bg-skyBlue h-full w-full"><img src="/images/icons/githubIcon.png" alt="Github" class="h-8"></a>
                        <a href="${this.DownloadURL}" class=" bg-darkBlue border-2 border-skyBlue align-middle p-2 rounded-md hover:text-darkBlue hover:bg-skyBlue">DOWNLOAD</a>
                    </div>
                </div>
                <div>
                    <p class="p-4 bg-darkBlue text-2xl text-coolWhite rounded-md">${this.Description}</p>

                </div>
            </div>
        </div>
    </div>`;
    }
}

var contentBody = document.getElementById("journallistbody");

const buildModEntries = (data) => {
    data.forEach(modEntry => {
        let newModEntry = new JournalEntry(modEntry);
        contentBody.innerHTML += newModEntry.getRawHtml();
    });
}

fetch("/json/journallist.json").then(response => response.json()).then(data => buildModEntries(data));
