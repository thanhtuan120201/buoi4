function check()
{
    var ht = f.HoTen.value;
    var ngay = f.Ngay.value;
    var thang = f.Thang.value;
    var nam = f.Nam.value;
    var nn = f.NgheNghiep.value;
    var gc = f.GhiChu.value;

    if(ht == '')
    {
        alert ('Họ tên không được bỏ trống.')
        return false;
    }

    if(ngay == '' || thang == '' || nam == '')
    {
        alert('Ngày sinh không được bỏ trống.')
        return false;
    }

    if(nn == '')
    {
        alert ('Nghề nghiệp không được bỏ trống.')
        return false;
    }

    if(gc == '')
    {
        alert ('Ghi chú không được bỏ trống.')
        return false;
    }

    return true;
}