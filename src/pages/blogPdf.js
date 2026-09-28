export async function downloadBlogAsPdf(title, date, contentEl, filename) {
  const ok = window.confirm(
    'Download this blog as PDF?\n\n' +
    'Title: ' + title + '\n' +
    'Date: ' + date + '\n' +
    'File: ' + filename + '.pdf'
  );
  if (!ok) return;

  const [{ jsPDF }, html2canvasModule] = await Promise.all([
    import('jspdf'),
    import('html2canvas'),
  ]);
  const html2canvas = html2canvasModule.default;

  const container = document.createElement('div');
  container.style.cssText =
    'position:fixed;top:-99999px;left:0;width:794px;padding:60px;' +
    'background:#070b14;color:#eef1f7;font-family:Georgia,serif;';
  container.innerHTML =
    '<div style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.15);padding-bottom:24px;margin-bottom:32px;">' +
      '<div style="font-size:14px;letter-spacing:4px;color:#2dd4bf;text-transform:uppercase;">ASTRA</div>' +
      '<div style="font-size:12px;color:#8a94ab;margin-top:4px;">Where Intelligence Meets Innovation</div>' +
    '</div>' +
    '<h1 style="font-size:32px;margin:0 0 8px;color:#ffffff;">' + title + '</h1>' +
    '<div style="font-size:13px;color:#fb923c;text-transform:uppercase;letter-spacing:2px;margin-bottom:32px;">' + date + '</div>' +
    '<div style="font-size:15px;line-height:1.8;color:#eef1f7;">' + contentEl.innerHTML + '</div>' +
    '<div style="text-align:center;margin-top:60px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.15);font-size:11px;color:#8a94ab;">' +
      '© ' + new Date().getFullYear() + ' Astra — Jessrell M. Custodio' +
    '</div>';
  document.body.appendChild(container);

  const canvas = await html2canvas(container, { backgroundColor: '#070b14', scale: 2 });
  document.body.removeChild(container);

  const imgData = canvas.toDataURL('image/jpeg', 0.92);
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const margin = 30;
  const usableW = pageW - margin * 2;
  const imgH = (canvas.height * usableW) / canvas.width;

  let heightLeft = imgH;
  let position = margin;
  pdf.addImage(imgData, 'JPEG', margin, position, usableW, imgH);
  heightLeft -= (pageH - margin * 2);

  while (heightLeft > 0) {
    position -= (pageH - margin * 2);
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', margin, position, usableW, imgH);
    heightLeft -= (pageH - margin * 2);
  }

  pdf.save(filename + '.pdf');
}
