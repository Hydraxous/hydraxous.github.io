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
        return `<div class="flex flex-col md:flex-row bg-veryDarkBlue border-4 border-darkBlue rounded-md p-2">
        <a href="${this.ItchLink}" class="w-fit rounded-md border-4 self-center md:self-start border-darkBlue hover:border-lapis">
            <img src="${this.ThumbnailURL}" alt="${this.ThumbnailAltText}" class="">
        </a>
        <div class="p-4 flex-col w-full h-fit">
            <div class="flex flex-col md:flex-row w-full justify-between">
                <div class="flex flex-col border-b-4 border-lapis md:border-0">
                    <h1 class="pb-4 text-3xl md:text-5xl text-coolWhite font-bold">${this.Name}</h1>
                </div>
                <div class="flex flex-col text-2xl text-left">
                    <p class="text-lapis md:text-right">${this.getGenreString()}</p>
                </div>
            </div>

            <p class="p-4 bg-darkBlue text-1xl md:text-3xl text-coolWhite rounded-md h-fit">${this.Description}</p>
        </div>
    </div>`;
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