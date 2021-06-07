
const tag = function(name) {
    this.name = name;
    this.contents = [];
};

tag.prototype.display = function() {
    let html = '<' + this.name + '>';
    //contents tag here
    for (let content of this.contents) {
        if (typeof(content) === 'string') {
            html += content;
        } else {
            html += content.display();
        }
    }
    html += ('</' + this.name + '>');

    return html;
};

json2html = function (array) {
    let headers = array.reduce((h, e) => {
        for (let key in e) {
            if (h.indexOf(key) === -1) {
                h.push(key);
            }
        }

        return h;
    }, []);
    //we try to get all necessary headers first

    let tableHTML = new tag('table');
    let headerHTML = new tag('thead');
    let headerRowHTML = new tag('tr');
    for (let header of headers) {
        let thHTML = new tag('th');
        thHTML.contents.push(header);
        headerRowHTML.contents.push(thHTML);
    }

    headerHTML.contents.push(headerRowHTML);
    tableHTML.contents.push(headerHTML);

    //now we try to display the contents
    let bodyHTML = new tag('tbody');

    for (let row of array) {
        let rowHTML = new tag('tr');
        for (let key in row) {
            let thHTML = new tag('th');
            thHTML.contents.push(header);
            headerRowHTML.contents.push(thHTML);
        }

        bodyHTML.contents.push(rowHTML);
    }

    tableHTML.contents.push(bodyHTML);

    return tableHTML.display();
};

module.exports = json2html;