const fs = require('fs');
const path = require('path');

const mappings = {
  'atividades_de_ligas_e_máquinas': 'LigasMaquinas',
  'check_list_do_maquinário': 'ChecklistMaquinario',
  'controle_de_funcionamento_do_maquinário': 'ControleMaquinario',
  'controle_de_produção_e_quebras': 'ProducaoQuebras',
  'dashboard_de_indicadores_de_armazém': 'Dashboard',
  'formulário_de_expedição_(embarque)': 'Expedicao',
  'formulário_de_recebimento_de_carga': 'Recebimento',
  'movimentação_diária_de_empilhadeira': 'Empilhadeira',
  'login_industrial_dark': 'Login',
  'recuperação_de_senha_industrial_dark': 'ForgotPassword',
  'sucesso_no_envio_do_e-mail_industrial_dark': 'EmailSent'
};

const baseDir = path.join(__dirname, 'stitch_appweb_coocaf_gest_o_de_armaz_ns_pwa');
const outDir = path.join(__dirname, 'frontend', 'src', 'pages');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function htmlToReact(html) {
  const bodyMatch = html.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return null;
  
  const bodyAttrs = bodyMatch[1];
  let content = bodyMatch[2];

  let bodyClass = '';
  const classMatch = bodyAttrs.match(/class="([^"]*)"/);
  if (classMatch) {
    bodyClass = classMatch[1];
  }

  content = content.replace(/<!--[\s\S]*?-->/g, '');
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  
  content = content.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
  content = content.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');

  content = content.replace(/<polygon([^>]*?)><\/polygon>/g, '<polygon$1 />');
  content = content.replace(/<circle([^>]*?)><\/circle>/g, '<circle$1 />');
  content = content.replace(/<path([^>]*?)><\/path>/g, '<path$1 />');
  content = content.replace(/<(polygon|circle|path)([^>]*?)(?<!\/)>(?![\s\S]*?<\/\1>)/g, '<$1$2 />');
  content = content.replace(/<\/(polygon|circle|path)>/g, '');

  content = content.replace(/stroke-width/g, 'strokeWidth');
  content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
  content = content.replace(/stroke-linecap/g, 'strokeLinecap');
  content = content.replace(/stroke-dasharray/g, 'strokeDasharray');
  content = content.replace(/fill-rule/g, 'fillRule');
  content = content.replace(/clip-rule/g, 'clipRule');

  content = content.replace(/\schecked(?:="[^"]*")?/g, ' defaultChecked={true}');
  content = content.replace(/\sreadonly(?:="[^"]*")?/g, ' readOnly={true}');
  content = content.replace(/readonly>/g, 'readOnly={true}>');
  
  content = content.replace(/inputmode=/g, 'inputMode=');
  
  content = content.replace(/onsubmit="([^"]*)"/g, (m, p1) => {
    return `onSubmit={(e) => { e.preventDefault(); }}`;
  });
  content = content.replace(/onclick="([^"]*)"/g, (m, p1) => {
    return `onClick={() => {}}`;
  });

  content = content.replace(/style="([^"]*)"/g, (match, styles) => {
    let converted = styles.split(';').filter(s => s.trim()).map(s => {
      let parts = s.split(':');
      if (parts.length < 2) return '';
      let key = parts.shift().trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      let val = parts.join(':').trim(); 
      val = val.replace(/`/g, '\\`');
      return `${key}: \`${val}\``;
    }).join(', ');
    return `style={{ ${converted} }}`;
  });

  return { content, bodyClass };
}

for (const [folder, componentName] of Object.entries(mappings)) {
  const codePath = path.join(baseDir, folder, 'code.html');
  if (fs.existsSync(codePath)) {
    const html = fs.readFileSync(codePath, 'utf8');
    const reactData = htmlToReact(html);
    if (reactData) {
      let jsx = `export default function ${componentName}() {\n  return (\n    <div className="${reactData.bodyClass}">\n      ${reactData.content}\n    </div>\n  );\n}\n`;
      fs.writeFileSync(path.join(outDir, `${componentName}.tsx`), jsx, 'utf8');
      console.log(`Generated ${componentName}.tsx`);
    } else {
      console.log(`Failed to parse body in ${codePath}`);
    }
  } else {
    console.log(`Not found: ${codePath}`);
  }
}