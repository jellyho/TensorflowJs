img = document.getElementById('upload');

function loadFile(input) {
    var file = input.files[0];	//선택된 파일 가져오기

    //이미지 source 가져오기
    img.src = URL.createObjectURL(file);
};

traits = ['5_o_Clock_Shadow', 'Arched_Eyebrows', 'Attractive', 'Bags_Under_Eyes', 'Bald', 'Bangs', 'Big_Lips', 'Big_Nose', 'Black_Hair', 'Blond_Hair'
    , 'Blurry', 'Brown_Hair', 'Bushy_Eyebrows', 'Chubby', 'Double_Chin', 'Eyeglasses', 'Goatee', 'Gray_Hair', 'Heavy_Makeup', 'High_Cheekbones', 'Male'
    , 'Mouth_Slightly_Open', 'Mustache', 'Narrow_Eyes', 'No_Beard', 'Oval_Face', 'Pale_Skin', 'Pointy_Nose', 'Receding_Hairline', 'Rosy_Cheeks', 'Sideburns'
    ,'Smiling','Straight_Hair','Wavy_Hair','Wearing_Earrings','Wearing_Hat','Wearing_Lipstick','Wearing_Necklace','Wearing_Necktie','Young']

var train_values = {}
var sliders = {}
var slider_ps = {}
var trait_vectors;

function resetTraits() {
    for (let i = 0; i < traits.length; i++) {
        train_values[traits[i]] = 0;
        var slider = document.getElementById(traits[i]);
        sliders[traits[i]] = slider;
        var sliderp = document.getElementById('vec_' + traits[i]);
        slider_ps[traits[i]] = sliderp;
        slider.addEventListener('input', (event) => {
            var value = (event.target.value - 50) / 10;
            slider_ps[event.target.id].innerText = value;
            train_values[event.target.id] = value;
        });
    }
    return true;
}

resetTraits();
fetch('trait_vectors.json').then((response) => response.json()).then((json) => trait_vectors = json);
