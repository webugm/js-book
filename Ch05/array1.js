var drinks = new Array('卡布奇諾咖啡', '拿鐵咖啡', '血腥瑪莉', 
  '長島冰茶', '愛爾蘭咖啡', '藍色夏威夷', '英式水果冰茶');

document.write('<table border="1">');
for(var i = 0; i < drinks.length; i++) {
  document.write('<tr><td>飲料' + (i + 1) + '</td>');
  document.write('<td>' + drinks[i] + '</td></tr>');
}
document.write('</table>');
