/********************************************************
 *                                                       *
 * Javascript for the Title-Footer plugin for Reveal.js  *
 *                                                       *
 * Author: Igor Leturia                                  *
 *                                                       *
 * License: GPL v3                                       *
 * http://www.gnu.org/copyleft/gpl.html        *
 *                                                       *
 ********************************************************/

/*
 Copied from:

 https://raw.githubusercontent.com/e-gor/Reveal.js-Title-Footer/master/plugin/title-footer/title-footer.js

 */

/* Title-Footer object and properties declaration with default values */

var title_footer=
    {
        title: '',
        background:'rgba(0,0,0,0.1)',
    };

/* Function to obtain all child elements with any of the indicated tags (from http://www.quirksmode.org/dom/getElementsByTagNames.html) */

title_footer.getElementsByTagNames=function(list,obj)
{
    if (!obj)
    {
        var obj=document;
    };
    var tagNames=list.split(',');
    var resultArray=new Array();
    for (var i=0;i<tagNames.length;i++)
    {
        var tags=obj.getElementsByTagName(tagNames[i]);
        for (var j=0;j<tags.length;j++)
        {
            resultArray.push(tags[j]);
        };
    };
    var testNode=resultArray[0];
    if (!testNode)
    {
        return [];
    };
    if (testNode.sourceIndex)
    {
        resultArray.sort(
            function (a,b)
            {
                return a.sourceIndex-b.sourceIndex;
            }
        );
    }
    else if (testNode.compareDocumentPosition)
    {
        resultArray.sort(
            function (a,b)
            {
                return 3-(a.compareDocumentPosition(b)&6);
            }
        );
    };
    return resultArray;
};

/* Method to initialize the Title-Footer footer */

title_footer.initialize=function(title,background)
{

    // Link to the Title-Footer CSS

    var link=document.createElement("link");
    link.href="plugin/title-footer/title-footer.css";
    link.type="text/css";
    link.rel="stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);

    // Initialize properties according to parameters

    this.background=background || 'rgba(0,0,0,0.1)';
    var title=title || '';
    if (title!='')
    {
        this.title=title;
    }
    else
    {
        var first_section=document.getElementsByTagName('section')[0];
        if (first_section.getElementsByTagName('section').length>0)
        {
            first_section=first_section.getElementsByTagName('section')[0];
        };
        var title_elements=this.getElementsByTagNames('h1,h2,h3',first_section);
        if (title_elements.length>0)
        {
            this.title=title_elements[0].textContent;
            for (var title_elements_index=1;title_elements_index<title_elements.length;title_elements_index++)
            {
                this.title=this.title+' - '+title_elements[title_elements_index].textContent;
            };
        };
    };

    // Create the Title-Footer footer
    var title_footer=document.createElement('footer');
    title_footer.setAttribute('id','title-footer');
    title_footer.setAttribute('width', '97%');
    title_footer.setAttribute('height', '20%');
    title_footer.setAttribute('style', 'margin-bottom: 3.5%;');
    var img_element=document.createElement('object');
    title_footer.appendChild(img_element);
    var div_class_reveal=document.querySelectorAll('.reveal')[0];
    div_class_reveal.appendChild(title_footer);
    img_element.setAttribute('type', 'image/svg+xml');
    img_element.setAttribute('data', 'img/conveningFooter.svg');
    var foot = document.getElementById('title-footer');
    var footbox = foot.getBoundingClientRect();
    var footWidth = footbox.width;
    img_element.setAttribute('width', footWidth + 'px');

};
