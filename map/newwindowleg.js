function PopUpNewWindowLeg(targetURL)
{
NewWindow = window.open(targetURL,'NewWinLeg','width=229,height=423,locationbar=yes,menubar=no,scrollbars=yes,status=no,resizable=yes');
NewWindow.moveTo(screen.width-269, 0);
NewWindow.focus();
}
