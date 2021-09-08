export const getWidth = (qty)=> {

    var width  = 100 / qty
    var margin = width * 0.05

    width -= Math.floor(margin)

    return Math.floor(width) + "%"

}

export const projects = [
    {name: 'mytaggie',
    skills: ['Front-end', 'Back-end', 'React', 'MySQL'],
    description: 'The first remote platform that facilitates the understanding of ideas through attachable multimedia nodes.',
    header_asset: ['taggie-header1.jpg', 'taggie-header2.jpg', 'taggie-header3.jpg', 'taggie-header4.jpg', 'taggie-header5.jpg', 'taggie-header6.jpg'],
},
    {name: 'atom8',
    skills: ['Front-end', 'Back-end', 'UX'],
    description: 'An integral ERP for e-commerce business owners. Automating data entry and actionable insights.',
    header_asset: ['atom-h-1.jpg', 'atom-h-2.jpg', 'atom-h-3.jpg', 'atom-h-4.jpg', 'atom-h-5.jpg', 'atom-h-6.jpg', 'atom-h-7.jpg', 'atom-h-8.jpg'],
},
{name: 'path',
    skills: ['Front-end', 'Back-end', 'Laravel'],
    description: 'International examinations platform. Developed to preserve the health and safety of candidates due to the COVID-19 outbreak.',
    header_asset: ['header0.jpg', 'header2.jpg', 'header3.jpg', 'header4.jpg', 'header5.jpg', 'header6.jpg'],
},
//     {name: 'cryptocenter',
//     skills: ['ReactJS', 'JavaScript', 'PHP'],
//     description: ''
// },
    {name: 'fluxq',
    skills: ['Front-end', 'UX'],
    description: 'Appointment manager for the pharmaceutic industry. Currently present in dozens of physical commerces.',
    header_asset: ['fluxq-header1.jpg', 'fluxq-header2.jpg', 'fluxq-header3.jpg', 'fluxq-header4.jpg'],
},
]

export const parseImgName = (name) =>{

    return name.replace(' ', '-')

} 

export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const typeWriter = (elem, txt, speed=70) => {
    var i = 0;
    function type(){
        if (i < txt.length) {
            elem.innerHTML += txt.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type()
}
