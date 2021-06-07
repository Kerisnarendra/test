
const Tag = function(name) {
    this.name = name;
    this.contents = [];
};

Tag.prototype.display = function() {
    let html = '<' + this.name + '>';
    //contents tag here
    for (let content of this.contents) {
        if (content instanceof Tag) {
            html += content.display();
        } else {
            html += content;
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

    let tableHTML = new Tag('table');
    let headerHTML = new Tag('thead');
    let headerRowHTML = new Tag('tr');
    for (let header of headers) {
        let thHTML = new Tag('th');
        thHTML.contents.push(header);
        headerRowHTML.contents.push(thHTML);
    }

    headerHTML.contents.push(headerRowHTML);
    tableHTML.contents.push(headerHTML);

    //now we try to display the contents
    let bodyHTML = new Tag('tbody');

    for (let row of array) {
        let rowHTML = new Tag('tr');
        for (let header of headers) {
            let tdHTML = new Tag('td');
            if (row[header] !== undefined) {
                tdHTML.contents.push(row[header]);
            } else {
                tdHTML.contents.push('');
            }
            rowHTML.contents.push(tdHTML);
        }

        bodyHTML.contents.push(rowHTML);
    }

    tableHTML.contents.push(bodyHTML);

    return tableHTML.display();
};

module.exports = json2html;