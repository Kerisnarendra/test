
class Tag {
  name: string;
  contents: any[];

  constructor(name: string, contents: any[] = []) {
    this.name = name;
    this.contents = contents;
  }
    
  display() {
    let html = '<' + this.name + '>';

    //display contents tag here
    html += this.contents.reduce((result, content) => {
      return result + ((content instanceof Tag) ? content.display() : content);
    }, '');

    html += ('</' + this.name + '>');

    return html;
  }
};

function json2html(array: any[]) {
  let headers: any[] = array.reduce((h, e) => {
    for (let key in e) {
      if (h.indexOf(key) === -1) {
        h.push(key);
      }
    }

    return h;
  }, []);

  //we try to get all necessary headers first
  let headerRowHTML = new Tag('tr', headers.map(h => new Tag('th', [ h ])));
  let headerHTML = new Tag('thead', [ headerRowHTML ]);

  //now we try to display the contents
  let bodyHTML = new Tag('tbody', array.map(row => {
    return new Tag('tr', headers.map(h => {
      return new Tag('td', (row[h] === undefined) ? [ '' ] : [ row[h] ]);
    }));
  }));

  let tableHTML = new Tag('table', [ headerHTML, bodyHTML ]);

  return tableHTML.display();
};

export { json2html };
