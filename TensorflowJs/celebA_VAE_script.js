img = document.getElementById('upload');

function loadFile(input) {
    var file = input.files[0];	//���õ� ���� ��������

    //�̹��� source ��������
    img.src = URL.createObjectURL(file);
};