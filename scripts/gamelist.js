class GameHeader
{

    constructor (obj)
    {
        obj && Object.assign(this, obj);
    }

    getGenreString()
    {
        return this.Genres.join(", ");
    }


    getRawHtml()
    {
        return `<a href="${this.ItchLink}" class="container flex mx-auto justify-between bg-veryDarkBlue border-4 border-darkBlue rounded-md p-2 hover:bg-navy">
        <img src="${this.ThumbnailURL}" alt="${this.ThumbnailAltText}" class="rounded-md border-4 border-darkBlue">
        <div class="p-4 container flex-col mx-auto">
            <div class=" container flex justify-between">
                <div class="container flexcol">
                    <h1 class="pb-4 text-5xl text-coolWhite font-bold">${this.Name}</h1>
                    <h1 class="pb-2 text-2xl text-lapis rounded-md">View on Itch.io</h1>
                </div>
                <div class="container flexcol">
                    <p class="text-2xl text-lapis text-right">${this.getGenreString()}</p>
                    <p class="text-2xl text-coolWhite text-right">${this.ProjectStatus}</p>
                </div>
            </div>
            
            <p class="p-4 bg-darkBlue text-2xl text-coolWhite rounded-md">${this.Description}</p>
        </div>
    </a>`;
    }
}

var contentBody = document.getElementById("gamelistbody");

const buildGameEntries = (data) => {
    data.forEach(gameEntry => {
        let newModEntry = new GameHeader(gameEntry);
        contentBody.innerHTML += newModEntry.getRawHtml();
    });
}

fetch("/json/gamelist.json").then(response => response.json()).then(data => buildGameEntries(data));