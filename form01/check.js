function check()
{
    var tdn = f.TDN.value;
    var mk = f.MK.value;

    if(tdn == '')
    {
        alert('Tên đăng nhập không được bỏ trống.');
        return false;
    }

    if(mk == '')
    {
        alert('Mật khẩu không được bỏ trống.');
        return false;
    }

    return true;
}