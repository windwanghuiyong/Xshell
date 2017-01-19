Sub Main
	xsh.Screen.WaitForString "blackfin login: "
	xsh.Screen.Send "username"
	xsh.Screen.Send VbCr
	xsh.Screen.WaitForString "password: "
	xsh.Screen.Send "userpassword"
	xsh.Screen.Send VbCr
End Sub