const dailyBoxNode = document.getElementById('daily-info');
const buttonScrollLeft = document.getElementById('btn-scroll-left');
const buttonScollRight = document.getElementById('btn-scroll-right');

function scrollDailyRight() {
    dailyBoxNode.scrollLeft += 200;
}

function scrollDailyLeft() {
    dailyBoxNode.scrollLeft -= 200;
}

function getWeatherIcon(wmoCode) {
    if (wmoCode === 0) {
        // clear or sunny
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
            viewBox="0 0 48 48">
            <path fill="#FF9800"
                d="M38,38c0,0-9-3-14-3s-14,3-14,3s3-10,3-14s-3-14-3-14s9,3,14,3s14-3,14-3s-3,10-3,14S38,38,38,38z">
            </path>
            <path fill="#FF9800"
                d="M43,24c0,0-8.222,4.778-11.222,7.778S24,43,24,43s-4.278-7.722-7.778-11.222S5,24,5,24s8.221-4.777,11.222-7.777S24,5,24,5s4.779,8.223,7.778,11.223S43,24,43,24z">
            </path>
            <path fill="#FFEB3B"
                d="M14,24c0,5.524,4.477,10,10,10s10-4.476,10-10s-4.477-10-10-10S14,18.476,14,24">
            </path>
        </svg>`;
    } else if (wmoCode >= 1 && wmoCode <= 3) {
        // Slightly Cloudy
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                    <path d="M8,10.001h17v17h-17z" fill="#ff9800"></path>
                    <path transform="translate(-8.24876,17.08622) rotate(-45.001)"
                        d="M7.661,9.661h17.678v17.678h-17.678z" fill="#ff9800"></path>
                    <path
                        d="M10,18.5c0,3.591 2.909,6.5 6.5,6.5c3.591,0 6.5,-2.909 6.5,-6.5c0,-3.591 -2.909,-6.5 -6.5,-6.5c-3.591,0 -6.5,2.909 -6.5,6.5"
                        fill="#ffeb3b"></path>
                    <g fill="#ffffff">
                        <path
                            d="M29.5,17c-4.69442,0 -8.5,3.80558 -8.5,8.5c0,4.69442 3.80558,8.5 8.5,8.5c4.69442,0 8.5,-3.80558 8.5,-8.5c0,-4.69442 -3.80558,-8.5 -8.5,-8.5z">
                        </path>
                        <path
                            d="M37,26.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM11,27c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z">
                        </path>
                        <path
                            d="M17.5,20c-3.58985,0 -6.5,2.91015 -6.5,6.5c0,3.58985 2.91015,6.5 6.5,6.5c3.58985,0 6.5,-2.91015 6.5,-6.5c0,-3.58985 -2.91015,-6.5 -6.5,-6.5z">
                        </path>
                        <path
                            d="M25,24.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z">
                        </path>
                        <path
                            d="M7,37c0,2.209 1.791,4 4,4h25c2.209,0 4,-1.791 4,-4v-1c0,-2.209 -1.791,-4 -4,-4h-25c-2.209,0 -4,1.791 -4,4z">
                        </path>
                    </g>
                </g>
            </g>
        </svg>`;
    } else if ((wmoCode >= 40 && wmoCode <= 49)) {
        // Cloudy
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
            viewBox="0,0,256,256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M38,15.5c0,4.7 -3.8,8.5 -8.5,8.5c-4.7,0 -8.5,-3.8 -8.5,-8.5c0,-4.7 3.8,-8.5 8.5,-8.5c4.7,0 8.5,3.8 8.5,8.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M44,23.9c0,3.9 -3.1,7 -7,7c-3.9,0 -7,-3.1 -7,-7c0,-3.9 3.1,-7 7,-7c3.9,0 7,3.1 7,7zM18,24c0,3.9 -3.1,7 -7,7c-3.9,0 -7,-3.1 -7,-7c0,-3.9 3.1,-7 7,-7c3.9,0 7,3.1 7,7z"
                        fill="#ffffff"></path>
                    <path
                        d="M24,16.5c0,3.6 -2.9,6.5 -6.5,6.5c-3.6,0 -6.5,-2.9 -6.5,-6.5c0,-3.6 2.9,-6.5 6.5,-6.5c3.6,0 6.5,2.9 6.5,6.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M32,21.9c0,3.9 -3.1,7 -7,7c-3.9,0 -7,-3.1 -7,-7c0,-3.9 3.1,-7 7,-7c3.9,0 7,3.1 7,7z"
                        fill="#ffffff"></path>
                    <path
                        d="M7,27c0,2.2 1.8,4 4,4h25c2.2,0 4,-1.8 4,-4v-1c0,-2.2 -1.8,-4 -4,-4h-25c-2.2,0 -4,1.8 -4,4z"
                        fill="#ffffff"></path>
                </g>
            </g>
        </svg>`;
    } else if (wmoCode === -1) {
        // Cloudy and windy
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
            viewBox="0,0,256,256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M38,15.5c0,4.7 -3.8,8.5 -8.5,8.5c-4.7,0 -8.5,-3.8 -8.5,-8.5c0,-4.7 3.8,-8.5 8.5,-8.5c4.7,0 8.5,3.8 8.5,8.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M44,23.9c0,3.9 -3.1,7 -7,7c-3.9,0 -7,-3.1 -7,-7c0,-3.9 3.1,-7 7,-7c3.9,0 7,3.1 7,7zM18,24c0,3.9 -3.1,7 -7,7c-3.9,0 -7,-3.1 -7,-7c0,-3.9 3.1,-7 7,-7c3.9,0 7,3.1 7,7z"
                        fill="#ffffff"></path>
                    <path
                        d="M24,16.5c0,3.6 -2.9,6.5 -6.5,6.5c-3.6,0 -6.5,-2.9 -6.5,-6.5c0,-3.6 2.9,-6.5 6.5,-6.5c3.6,0 6.5,2.9 6.5,6.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M32,21.9c0,3.9 -3.1,7 -7,7c-3.9,0 -7,-3.1 -7,-7c0,-3.9 3.1,-7 7,-7c3.9,0 7,3.1 7,7z"
                        fill="#ffffff"></path>
                    <path
                        d="M7,27c0,2.2 1.8,4 4,4h25c2.2,0 4,-1.8 4,-4v-1c0,-2.2 -1.8,-4 -4,-4h-25c-2.2,0 -4,1.8 -4,4z"
                        fill="#ffffff"></path>
                    <path
                        d="M31.9,41c-2.5,0 -4.6,-1.5 -5.5,-3.9c-0.2,-0.5 0.1,-1.1 0.6,-1.3c0.5,-0.2 1.1,0.1 1.3,0.6c0.6,1.7 2,2.7 3.7,2.6c2.3,-0.1 4,-1.8 4,-4c0,-2.2 -1.8,-4 -4,-4h-20c-0.6,0 -1,-0.4 -1,-1c0,-0.6 0.4,-1 1,-1h20c3.3,0 6,2.7 6,6c0,3.2 -2.6,5.9 -6,6c0,0 -0.1,0 -0.1,0zM25,27h-11c-0.6,0 -1,-0.4 -1,-1c0,-0.6 0.4,-1 1,-1h11c1.6,0 3,-1.4 3,-3c0,-1.6 -1.4,-3 -3,-3c-1.2,0 -2.3,0.8 -2.8,1.9c-0.2,0.5 -0.8,0.8 -1.3,0.6c-0.5,-0.2 -0.8,-0.8 -0.6,-1.3c0.8,-1.9 2.6,-3.2 4.7,-3.2c2.8,0 5,2.2 5,5c0,2.8 -2.2,5 -5,5z"
                        fill="#2196f3"></path>
                    <path
                        d="M18,41c-1.5,0 -2.9,-0.8 -3.5,-2.2c-0.2,-0.5 0,-1.1 0.4,-1.3c0.5,-0.2 1.1,0 1.3,0.4c0.3,0.6 1,1 1.7,1c1.1,0 2,-0.9 2,-2c0,-1.1 -0.9,-2 -2,-2h-8c-0.6,0 -1,-0.4 -1,-1c0,-0.6 0.4,-1 1,-1h8c2.2,0 4,1.8 4,4c0,2.2 -1.7,4.1 -3.9,4.1z"
                        fill="#2196f3"></path>
                </g>
            </g>
        </svg>`;
    } else if (wmoCode === 13 || wmoCode === 17) {
        // Thunder
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
            viewBox="0,0,256,256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M29.5,5c-4.69442,0 -8.5,3.80558 -8.5,8.5c0,4.69442 3.80558,8.5 8.5,8.5c4.69442,0 8.5,-3.80558 8.5,-8.5c0,-4.69442 -3.80558,-8.5 -8.5,-8.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M37,14.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM11,15c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M17.5,8c-3.58985,0 -6.5,2.91015 -6.5,6.5c0,3.58985 2.91015,6.5 6.5,6.5c3.58985,0 6.5,-2.91015 6.5,-6.5c0,-3.58985 -2.91015,-6.5 -6.5,-6.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M25,12.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M7,25c0,2.209 1.791,4 4,4h25c2.209,0 4,-1.791 4,-4v-1c0,-2.209 -1.791,-4 -4,-4h-25c-2.209,0 -4,1.791 -4,4z"
                        fill="#ffffff"></path>
                    <path d="M29,31h-4.922l3.922,-8h-6l-4,11h4.966l-2.966,9z" fill="#FFEB3B"></path>
                </g>
            </g>
        </svg>`;
    } else if (wmoCode >= 50 && wmoCode <= 69) {
        // Light Rain
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M29.5,5c-4.69442,0 -8.5,3.80558 -8.5,8.5c0,4.69442 3.80558,8.5 8.5,8.5c4.69442,0 8.5,-3.80558 8.5,-8.5c0,-4.69442 -3.80558,-8.5 -8.5,-8.5z" fill="#ffffff"></path><path d="M37,14.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM11,15c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z" fill="#ffffff"></path><path d="M17.5,8c-3.58985,0 -6.5,2.91015 -6.5,6.5c0,3.58985 2.91015,6.5 6.5,6.5c3.58985,0 6.5,-2.91015 6.5,-6.5c0,-3.58985 -2.91015,-6.5 -6.5,-6.5z" fill="#ffffff"></path><path d="M25,12.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z" fill="#ffffff"></path><path d="M7,25c0,2.209 1.791,4 4,4h25c2.209,0 4,-1.791 4,-4v-1c0,-2.209 -1.791,-4 -4,-4h-25c-2.209,0 -4,1.791 -4,4z" fill="#ffffff"></path><g fill="#2196f3"><path d="M26,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM25,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM24,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM23,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM22,41c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM19,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM18,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM17,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM20,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1z"></path></g></g></g>
        </svg>`
    } else if ((wmoCode >= 80 && wmoCode <= 84)) {
        // Rain
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
            viewBox="0,0,256,256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M30.5,5c-4.69442,0 -8.5,3.80558 -8.5,8.5c0,4.69442 3.80558,8.5 8.5,8.5c4.69442,0 8.5,-3.80558 8.5,-8.5c0,-4.69442 -3.80558,-8.5 -8.5,-8.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M38,14.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM12,15c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M18.5,8c-3.58985,0 -6.5,2.91015 -6.5,6.5c0,3.58985 2.91015,6.5 6.5,6.5c3.58985,0 6.5,-2.91015 6.5,-6.5c0,-3.58985 -2.91015,-6.5 -6.5,-6.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M26,12.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M8,25c0,2.209 1.791,4 4,4h25c2.209,0 4,-1.791 4,-4v-1c0,-2.209 -1.791,-4 -4,-4h-25c-2.209,0 -4,1.791 -4,4z"
                        fill="#ffffff"></path>
                    <g fill="#2196f3">
                        <path
                            d="M16,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM8,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM15,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM14,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM13,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM7,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM6,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM5,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,41c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM4,41c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM24,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM23,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM22,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM21,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM20,41c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM11,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM10,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM19,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM18,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM9,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM17,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM20,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM36,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM35,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM34,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM33,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM28,41c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM31,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM30,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM29,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM32,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM36,41c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM39,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM38,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM37,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM40,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM27,32c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM26,35c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM25,38c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM28,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,29c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1z">
                        </path>
                    </g>
                </g>
            </g>
        </svg>`;
    } else if ((wmoCode >= 85 && wmoCode <= 90) || (wmoCode >= 70 && wmoCode <= 79)) {
        // Snow
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
            viewBox="0,0,256,256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M29.5,5c-4.69442,0 -8.5,3.80558 -8.5,8.5c0,4.69442 3.80558,8.5 8.5,8.5c4.69442,0 8.5,-3.80558 8.5,-8.5c0,-4.69442 -3.80558,-8.5 -8.5,-8.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M37,14.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM11,15c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M17.5,8c-3.58985,0 -6.5,2.91015 -6.5,6.5c0,3.58985 2.91015,6.5 6.5,6.5c3.58985,0 6.5,-2.91015 6.5,-6.5c0,-3.58985 -2.91015,-6.5 -6.5,-6.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M25,12.893c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M7,25c0,2.209 1.791,4 4,4h25c2.209,0 4,-1.791 4,-4v-1c0,-2.209 -1.791,-4 -4,-4h-25c-2.209,0 -4,1.791 -4,4z"
                        fill="#ffffff"></path>
                    <g fill="#2196f3">
                        <path d="M23,34h2v9h-2z"></path>
                        <path transform="translate(69.3522,37.33666) rotate(120.471)"
                            d="M23,33.999h2v9h-2z"></path>
                        <path transform="translate(45.81491,-1.27889) rotate(60.679)"
                            d="M23.001,34h1.998v9h-1.998z"></path>
                        <path d="M10,31h2v9h-2z"></path>
                        <path transform="translate(47.17909,44.00433) rotate(120.444)"
                            d="M10,30.999h2v9h-2z"></path>
                        <path transform="translate(36.56537,8.52479) rotate(60.679)"
                            d="M10.001,31h1.998v9h-1.998z"></path>
                        <path d="M36,31h2v9h-2z"></path>
                        <path transform="translate(86.35507,21.60201) rotate(120.458)"
                            d="M35.999,30.998h2v9h-2z"></path>
                        <path transform="translate(49.8326,-14.14348) rotate(60.679)"
                            d="M36,31h1.998v9.001h-1.998z"></path>
                    </g>
                </g>
            </g>
        </svg>`;
    } else if (wmoCode >= 91 && wmoCode <= 99) {
        // Thunderstorm
        return `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
            viewBox="0,0,256,256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M29.5,5c-4.694,0 -8.5,3.806 -8.5,8.5c0,4.694 3.806,8.5 8.5,8.5c4.694,0 8.5,-3.806 8.5,-8.5c0,-4.694 -3.806,-8.5 -8.5,-8.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M37,14.893c-3.866,0 -7,3.134 -7,7c0,3.866 3.134,7 7,7c3.866,0 7,-3.134 7,-7c0,-3.866 -3.134,-7 -7,-7zM11,15c-3.866,0 -7,3.134 -7,7c0,3.866 3.134,7 7,7c3.866,0 7,-3.134 7,-7c0,-3.866 -3.134,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M17.5,8c-3.59,0 -6.5,2.91 -6.5,6.5c0,3.59 2.91,6.5 6.5,6.5c3.59,0 6.5,-2.91 6.5,-6.5c0,-3.59 -2.91,-6.5 -6.5,-6.5z"
                        fill="#ffffff"></path>
                    <path
                        d="M25,12.893c-3.866,0 -7,3.134 -7,7c0,3.866 3.134,7 7,7c3.866,0 7,-3.134 7,-7c0,-3.866 -3.134,-7 -7,-7z"
                        fill="#ffffff"></path>
                    <path
                        d="M7,25c0,2.209 1.791,4 4,4h25c2.209,0 4,-1.791 4,-4v-1c0,-2.209 -1.791,-4 -4,-4h-25c-2.209,0 -4,1.791 -4,4z"
                        fill="#ffffff"></path>
                    <circle cx="38" cy="30" r="1" fill="#2196f3"></circle>
                    <circle cx="30" cy="30" r="1" fill="#2196f3"></circle>
                    <circle cx="37" cy="33" r="1" fill="#2196f3"></circle>
                    <circle cx="36" cy="36" r="1" fill="#2196f3"></circle>
                    <circle cx="35" cy="39" r="1" fill="#2196f3"></circle>
                    <circle cx="29" cy="33" r="1" fill="#2196f3"></circle>
                    <circle cx="28" cy="36" r="1" fill="#2196f3"></circle>
                    <circle cx="27" cy="39" r="1" fill="#2196f3"></circle>
                    <circle cx="34" cy="42" r="1" fill="#2196f3"></circle>
                    <circle cx="26" cy="42" r="1" fill="#2196f3"></circle>
                    <circle cx="33" cy="33" r="1" fill="#2196f3"></circle>
                    <circle cx="32" cy="36" r="1" fill="#2196f3"></circle>
                    <circle cx="31" cy="39" r="1" fill="#2196f3"></circle>
                    <circle cx="34" cy="30" r="1" fill="#2196f3"></circle>
                    <circle cx="17" cy="30" r="1" fill="#2196f3"></circle>
                    <circle cx="9" cy="30" r="1" fill="#2196f3"></circle>
                    <circle cx="16" cy="33" r="1" fill="#2196f3"></circle>
                    <circle cx="15" cy="36" r="1" fill="#2196f3"></circle>
                    <circle cx="14" cy="39" r="1" fill="#2196f3"></circle>
                    <circle cx="8" cy="33" r="1" fill="#2196f3"></circle>
                    <circle cx="7" cy="36" r="1" fill="#2196f3"></circle>
                    <circle cx="6" cy="39" r="1" fill="#2196f3"></circle>
                    <circle cx="13" cy="42" r="1" fill="#2196f3"></circle>
                    <circle cx="5" cy="42" r="1" fill="#2196f3"></circle>
                    <circle cx="12" cy="33" r="1" fill="#2196f3"></circle>
                    <circle cx="11" cy="36" r="1" fill="#2196f3"></circle>
                    <circle cx="10" cy="39" r="1" fill="#2196f3"></circle>
                    <circle cx="13" cy="30" r="1" fill="#2196f3"></circle>
                    <path d="M20,40l2,-7h-3l4,-8h4l-3.595,6h3.595z" fill="#ffeb3b"></path>
                </g>
            </g>
        </svg>`;
    } else {
        return 'Undefined'
    }
}

async function getWeatherData(latitude, longitude) {
    // let URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`
    let URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`
    try {
        const req = await fetch(URL);
        const  data = await req.json();
        // console.log(data);
        const dailyWMOCode = data.daily.weather_code;
        const dailyTime = data.daily.time;
        const dailyTemperatureMax = data.daily.temperature_2m_max;
        const dailyTemperatureMin = data.daily.temperature_2m_min;
        const dailyPrecipitationProb = data.daily.precipitation_probability_max;

        const currentWMOCode = data.current.weather_code;
        const currentTime = data.current.time;
        const currentTemperature = data.current.temperature_2m;
        const currentHumidity = data.current.relative_humidity_2m;
        const currentPrecipitation = data.current.precipitation;
        const currentWindDirection = data.current.wind_direction_10m;
        const currentWindSpeed = data.current.wind_speed_10m;

        return {'daily': {'wmo_code': dailyWMOCode,
                          'time': dailyTime,
                          'temperature_min': dailyTemperatureMin,
                          'temperature_max': dailyTemperatureMax,
                          'precipitation_probability': dailyPrecipitationProb },
                 'current': { 'wmo_code': currentWMOCode,
                              'temperature': currentTemperature,
                              'time': currentTime,
                              'humidity': currentHumidity,
                              'precipitaton': currentPrecipitation,
                              'wind_direction': currentWindDirection,
                              'wind_speed': currentWindSpeed } 
                }
        
    } catch (err) {
        console.error(err);
    }
}

async function getLatitudeLongitude(cityKeyword, limit=1) {
    let URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityKeyword}&count=${limit}&language=en&format=json`
    try {
        const req = await fetch(URL);
        const data = await req.json();
        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;
        const cityName = data.results[0].name;
        
        return {'latitude': latitude, 
                'longitude': longitude, 
                'city_name': cityName}
    } catch (error) {
        console.error(error);
    }
}

const scrollButtons = `<button id="btn-scroll-left" class="btn-scroll btn-scroll-left position-absolute d-none d-md-block" onclick="scrollDailyLeft()">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path
                                    d="M192 127.3v257.3c0 17.8-21.5 26.7-34.1 14.1L29.2 270.1c-7.8-7.8-7.8-20.5 0-28.3l128.7-128.7c12.6-12.6 34.1-3.7 34.1 14.1z" />
                            </svg>
                        </button>
                        <button id="btn-scroll-right" class="btn-scroll btn-scroll-right position-absolute d-none d-md-block" onclick="scrollDailyRight()">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path
                                    d="M0 384.7V127.3c0-17.8 21.5-26.7 34.1-14.1l128.7 128.7c7.8 7.8 7.8 20.5 0 28.3L34.1 398.8C21.5 411.4 0 402.5 0 384.7z" />
                            </svg>
                        </button>`;

function getDailyCard(wmoCode, time, temperatureMin, temperatureMax, precipitation) {
    const icon = getWeatherIcon(wmoCode);
    const parsedTime = new Date(time);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedTime = parsedTime.toLocaleDateString('en-US', options);
    return `<div class="weather-group text-center">
                ${formattedTime}
                <div class="weather-icon">
                    ${icon}
                </div>
                <div class="text-nowrap">${Math.round(temperatureMin)}&deg;- ${Math.round(temperatureMax)}&deg;C / ${precipitation}%</div>
            </div>`;
}

function renderDailyCards(wmoCode, time, temperatureMin, temperatureMax, precipitationProbability) {
    const dailyInfo = document.getElementById('daily-info');
    dailyInfo.innerHTML = scrollButtons;
    for (let i=0; i<wmoCode.length; i++) {
        // starts from i==1, since daily info starts from tomorrow
        if (i>0) {
            let card = getDailyCard(wmoCode[i], time[i], temperatureMin[i], temperatureMax[i], precipitationProbability[i]);
            dailyInfo.innerHTML += card;
        }
    }
}

function renderMainInfo(cityName, wmoCode, temperature, humidity, time, precipitation_probability, temperatureMin, temperatureMax, windDirection, windSpeed) {
    const locationNode = document.getElementById('location');
    const temperatureNode = document.getElementById('temperature');
    const humidityNode = document.getElementById('humidity');
    const currentDayNode = document.getElementById('current-day');
    const currentDateNode = document.getElementById('current-date');
    const currentPrecipitationProbabilityNode = document.getElementById('current-precipitation-probability');
    const currentWeatherIconNode = document.getElementById('weather-icon-main');
    const detailTemperature = document.getElementById('detail-temperature');
    const detailWindDirection = document.getElementById('detail-wind-direction');
    const detailWindSpeed = document.getElementById('detail-wind-speed');

    const currentDate = time.split('T')[0];
    const parsedTime = new Date(currentDate);
    const options1 = { weekday: 'long'};
    const options2 = { month: 'short', day: 'numeric', year:'numeric' };
    const formattedDay = parsedTime.toLocaleDateString('en-US', options1);
    const formattedDate = parsedTime.toLocaleDateString('en-US', options2);
    
    currentDayNode.innerText = formattedDay;
    currentDateNode.innerText = formattedDate;

    locationNode.innerText = cityName;
    temperatureNode.innerText = `${temperature}\u{B0}C`;
    humidityNode.innerText = `${humidity}% humidity`;

    currentPrecipitationProbabilityNode.innerText = `${precipitation_probability}% precipitation probability`;
    currentWeatherIconNode.innerHTML = getWeatherIcon(wmoCode);

    detailTemperature.innerText = `${temperatureMin}\u{B0}- ${temperatureMax}\u{B0}C`;
    detailWindDirection.innerText = `${windDirection}\u{B0}`;
    detailWindSpeed.innerText = `${windSpeed} km/h`;
}

async function renderInfoAll(cityKeyword, latitude, longitude) {
    let weatherInfo;
    let cityName;

    // if the input is left empty and user hit enter or click search, then it will automatically get coordinates from browser.
    if (cityKeyword) {
        const cityInfo = await getLatitudeLongitude(cityKeyword);
        cityName = cityInfo.city_name;
        weatherInfo = await getWeatherData(cityInfo.latitude, cityInfo.longitude);
    } else {
        cityName = await getLocationName(latitude, longitude);
        weatherInfo = await getWeatherData(latitude, longitude);
    }
    
    renderMainInfo(
        cityName, 
        weatherInfo.current.wmo_code,
        weatherInfo.current.temperature, 
        weatherInfo.current.humidity, 
        weatherInfo.current.time, 
        weatherInfo.daily.precipitation_probability[0],
        weatherInfo.daily.temperature_min[0],
        weatherInfo.daily.temperature_max[0],
        weatherInfo.current.wind_direction,
        weatherInfo.current.wind_speed);
    renderDailyCards(
        weatherInfo.daily.wmo_code, 
        weatherInfo.daily.time, 
        weatherInfo.daily.temperature_min, 
        weatherInfo.daily.temperature_max, 
        weatherInfo.daily.precipitation_probability)
}

// search feature
const searchWeather = (e) => {
    if (e.key === 'Enter') {
        const inputValue = document.getElementById('search').value;
        renderInfoAll(inputValue, null, null);
    }
}

document.getElementById('search').addEventListener('keydown', searchWeather);

async function getLocationName(latitude, longitude) {
    // API to get location from coordinates
    const URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=892dc43f58c115efa3111853c9bb6a18`;
    try {
        const req = await fetch(URL);
        const data = await req.json();
        
        return data[0].local_names.id;
    } catch (err) {
        console.log(err);
    }
}
// end search

function getLocation() {
    
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        renderInfoAll('', latitude, longitude);
    });
}

// to initiate value when the app opened
getLocation();