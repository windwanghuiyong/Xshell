function Main()
{
	xsh.Screen.Send("touch /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);

	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep DeviceMode >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	// X, XL, Y, Z ʱ��
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time15 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time16 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time17 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time18 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	// ��������
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Value1 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time1 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	// �����������
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Value3 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time3 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	// �غ�բ��ʱ
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time6 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	xsh.Screen.Send("cat /mnt/vtprotflt.ini | grep prot_Time7 >> /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);

	xsh.Screen.Send("cat /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
	xsh.Screen.Send("rm /tmp/tmp.txt");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(100);
}
