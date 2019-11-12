

function getParam(): any {
  const vars = {};
  window.location.href.replace( location.hash, '' ).replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi,
    ( m, key, value ): any => { vars[key] = value !== undefined ? value : ''; }
  );
  return vars;
}


function getServer() {
  let server = getParam().server;
  if (server == null) {server = 'https://reducshare.com'; }
  if (!server.startsWith('http')) {server = 'http://' + server; }
  return server;
}


function createFaq(template: string= '', zone: HTMLElement, file: string= '/config.json') {
  fetch(getServer() + '/assets/' + file).then((r: any) => {
    r.json().then((config) => {
      const i = 0;
      let s = '';
      if (config.faqs != null) {
        config.faqs.forEach((faq: any) => {
          if (!faq.id) {
            faq.id = 'faq_' + i;
          } else {
            faq.id = 'faq_' + faq.id;
          }

          s = s + template;
          for (let j = 0; j < 3; j++) {
            s = s.replace('faq_title', faq.title);
            if (faq.content.startsWith('http') || faq.content.endsWith('html')) {
              faq.content = '<div class=\'embed-responsive embed-responsive-16by9\'><iframe width=\'100%\' class=\'embed-responsive-item\' src=\'' + faq.content + '\' frameborder=\'0\'></iframe></div>';
            }
            s = s.replace('faq_content', faq.content);
            s = s.replace('faq_id', faq.id);
            s = s.replace('faq_head_id', 'head_' + faq.id);
          }
        });
      }
      zone.innerHTML = s;
    });
  });
}
