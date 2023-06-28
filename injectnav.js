const navHTML = `<div class="relative container mx-auto p-5  md:mt-10">
<div class="flex flex-col md:flex-row items-center justify-between">
    <a href="/index.html" class="md:p-5 pb-2 md:pb-8 rounded-md  text-skyBlue hover:text-coolWhite">
        <h1 class="text-4xl md:text-7xl">Hydraxous</h1>
    </a>
    <div class="p-5">
        <a href="hire.html" class="p-2 md:p-4 px-5 pt-3 text-2xl md:text-4xl text-darkBlue bg-skyBlue rounded-md baseline hover:bg-coolWhite">Hire</a>
        <a href="https://ko-fi.com/Hydraxous" target="_blank" rel="noopener noreferrer" class="p-2 md:p-4 px-5 pt-3 text-2xl md:text-4xl text-darkBlue bg-skyBlue rounded-md baseline hover:bg-coolWhite">Donate</a>
    </div>
</div>
</div>`

function injectNavBar()
{
    let navElement = document.getElementById("navbar");
    navElement.innerHTML = navHTML;
}

injectNavBar();