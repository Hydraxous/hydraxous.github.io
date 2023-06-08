const navHTML = `<div class="flex items-center justify-between">
                    <a href="/index.html" class="p-5 pb-8 rounded-md bg-darkBlue text-skyBlue hover:bg-skyBlue hover:text-darkBlue">
                        <h1 class="text-7xl">Hydraxous</h1>
                    </a>
                    <div class="p-5">
                        <a href="/hire.html" class="p-4 px-5 pt-3 text-4xl text-darkBlue bg-skyBlue rounded-md baseline hover:bg-coolWhite">Hire</a>
                        <a href="https://ko-fi.com/Hydraxous" target="_blank" rel="noopener noreferrer" class="p-4 px-6 pt-3 text-4xl text-darkBlue bg-skyBlue rounded-md baseline hover:bg-coolWhite">Donate</a>
                    </div>
                </div>`

function injectNavBar()
{
    let navElement = document.getElementById("navbar");
    navElement.innerHTML = navHTML;
}

injectNavBar();