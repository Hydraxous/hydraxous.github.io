class ModEntry {
    constructor(obj)
    {
        obj && Object.assign(this, obj);
    }

    getRawHtml()
    {
        return `<div id="modListEntryTemplate">
        <div class="container flex mx-auto justify-between bg-veryDarkBlue border-4 border-darkBlue rounded-md p-2">
            <img src="/${this.ThumbnailURL}" alt="${this.ThumbnailAltText}" class="rounded-md border-4 border-darkBlue">
            <div class="p-4 container flex-col mx-auto">
                <div class=" container flex justify-between">
                    <h1 class="text-5xl text-coolWhite font-bold">${this.Name}</h1>
                    <h2 class="text-2xl text-lapis">${this.Version}</h2>
                </div>
                <div class="container flex justify-between pb-2">
                    <a href="${this.PlatformURL}"><h2 class="text-2xl text-skyBlue pt-2">${this.Platform}</h2></a>
                    <div class="container w-1/6 flex space-x-4">
                        <a href="${this.GithubURL}" class="text-skyBlue bg-darkBlue p-2  rounded-md hover:text-darkBlue hover:bg-skyBlue"><img src="/images/icons/githubIcon.png" alt="Github" class=""></a>
                        <a href="${this.DownloadURL}" class="text-skyBlue bg-darkBlue border-2 border-skyBlue p-2 pl-4 pr-4 rounded-md hover:text-darkBlue hover:bg-skyBlue">DOWNLOAD</a>
                    </div>
                </div>
                <p class="p-4 bg-darkBlue text-coolWhite rounded-md">${this.Description}</p>
            </div>
        </div>
    </div>`;
    }
}

var contentBody = document.getElementById("modlistbody");

const buildModEntries = (data) => {
    data.forEach(modEntry => {
        let newModEntry = new ModEntry(modEntry);
        contentBody.innerHTML += newModEntry.getRawHtml();
    });
}

fetch("/json/modlist.json").then(response => response.json()).then(data => buildModEntries(data));
