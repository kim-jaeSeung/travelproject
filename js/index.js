// console.log("!!");

// let areaBasedList =
//     "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?pageNo=1&MobileOS=%20IOS%2C%20AND%2C%20WIN%2C%20ETC&MobileApp=test&_type=json&serviceKey=%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D"; // 관광지, 이미지, 시도

// let areaCode =
//     "https://apis.data.go.kr/B551011/KorService1/areaCode1?pageNo=1&MobileOS=%20IOS%2C%20AND%2C%20WIN%2C%20ETC&MobileApp=test&_type=json&serviceKey=%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D"; // 지역코드
// let a =
//     "https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=18&pageNo=1&MobileOS=%20IOS%2C%20AND%2C%20WIN%2C%20ETC&MobileApp=test&areaCode=1&_type=json&serviceKey=%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D";
// console.log(a);
// // let areaCode = {
// //     code1: " 서울특별시",
// // };
// fetch(areaBasedList)
//     .then((response) => response.json())
//     .then((data) => {
//         let list = data.response.body.items.item;

//         console.log(list);
//     });

// fetch(areaCode)
//     .then((response) => response.json())
//     .then((data) => {
//         let list = data.response.body.items.item;

//         console.log(list);
//     });
console.log("연결");

// 서울
let area1 = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];
let area2 = [
  "계양구",
  "남구",
  "남동구",
  "동구",
  "부평구",
  "서구",
  "연수구",
  "중구",
  "강화군",
  "옹진군",
];
let area3 = ["대덕구", "동구", "서구", "유성구", "중구"];
let area4 = ["광산구", "남구", "동구", "북구", "서구"];
let area5 = [
  "남구",
  "달서구",
  "동구",
  "북구",
  "서구",
  "수성구",
  "중구",
  "달성군",
];
let area6 = ["남구", "동구", "북구", "중구", "울주군"];
let area7 = [
  "강서구",
  "금정구",
  "남구",
  "동구",
  "동래구",
  "부산진구",
  "북구",
  "사상구",
  "사하구",
  "서구",
  "수영구",
  "연제구",
  "영도구",
  "중구",
  "해운대구",
  "기장군",
];
let area8 = [
  "고양시",
  "과천시",
  "광명시",
  "광주시",
  "구리시",
  "군포시",
  "김포시",
  "남양주시",
  "동두천시",
  "부천시",
  "성남시",
  "수원시",
  "시흥시",
  "안산시",
  "안성시",
  "안양시",
  "양주시",
  "오산시",
  "용인시",
  "의왕시",
  "의정부시",
  "이천시",
  "파주시",
  "평택시",
  "포천시",
  "하남시",
  "화성시",
  "가평군",
  "양평군",
  "여주군",
  "연천군",
];
let area9 = [
  "강릉시",
  "동해시",
  "삼척시",
  "속초시",
  "원주시",
  "춘천시",
  "태백시",
  "고성군",
  "양구군",
  "양양군",
  "영월군",
  "인제군",
  "정선군",
  "철원군",
  "평창군",
  "홍천군",
  "화천군",
  "횡성군",
];
let area10 = [
  "제천시",
  "청주시",
  "충주시",
  "괴산군",
  "단양군",
  "보은군",
  "영동군",
  "옥천군",
  "음성군",
  "증평군",
  "진천군",
  "청원군",
];
let area11 = [
  "계룡시",
  "공주시",
  "논산시",
  "보령시",
  "서산시",
  "아산시",
  "천안시",
  "금산군",
  "당진군",
  "부여군",
  "서천군",
  "연기군",
  "예산군",
  "청양군",
  "태안군",
  "홍성군",
];
let area12 = [
  "군산시",
  "김제시",
  "남원시",
  "익산시",
  "전주시",
  "정읍시",
  "고창군",
  "무주군",
  "부안군",
  "순창군",
  "완주군",
  "임실군",
  "장수군",
  "진안군",
];
let area13 = [
  "광양시",
  "나주시",
  "목포시",
  "순천시",
  "여수시",
  "강진군",
  "고흥군",
  "곡성군",
  "구례군",
  "담양군",
  "무안군",
  "보성군",
  "신안군",
  "영광군",
  "영암군",
  "완도군",
  "장성군",
  "장흥군",
  "진도군",
  "함평군",
  "해남군",
  "화순군",
];
let area14 = [
  "경산시",
  "경주시",
  "구미시",
  "김천시",
  "문경시",
  "상주시",
  "안동시",
  "영주시",
  "영천시",
  "포항시",
  "고령군",
  "군위군",
  "봉화군",
  "성주군",
  "영덕군",
  "영양군",
  "예천군",
  "울릉군",
  "울진군",
  "의성군",
  "청도군",
  "청송군",
  "칠곡군",
];
let area15 = [
  "거제시",
  "김해시",
  "마산시",
  "밀양시",
  "사천시",
  "양산시",
  "진주시",
  "진해시",
  "창원시",
  "통영시",
  "거창군",
  "고성군",
  "남해군",
  "산청군",
  "의령군",
  "창녕군",
  "하동군",
  "함안군",
  "함양군",
  "합천군",
];
let area16 = ["서귀포시", "제주시", "남제주군", "북제주군"];


//* 지역 데이터 객체를 생성하여 시도와 시군구를 매핑
const regionData = {
  서울특별시: area1,
  인천광역시: area2,
  대전광역시: area3,
  광주광역시: area4,
  대구광역시: area5,
  울산광역시: area6,
  부산광역시: area7,
  경기도: area8,
  강원도: area9,
  충청북도: area10,
  충청남도: area11,
  전라북도: area12,
  전라남도: area13,
  경상북도: area14,
  경상남도: area15,
  제주도: area16,
};
//* 시도 선택 select
const citySelect = document.getElementById("city");
//* 시군구 선택 select
const regionSelect = document.getElementById("region");
//* regionData의 키 값을 가져와 city option에 추가
Object.keys(regionData).forEach((key) => {
  //   const option = document.createElement("option");
  //   option.value = key; // value에 key(시도 이름)를 설정
  //   option.textContent = key; // 화면에 표시될 텍스트
  //     citySelect.appendChild(option);
  citySelect.innerHTML += `<option value="">${key}</option>`;
});

//* city select에서 선택된 값에 따라 region select 업데이트
citySelect.addEventListener("change", () => {
  const selectedCity = citySelect.value;
  const regions = regionData[selectedCity] || [];
  //* 시군구 초기화
  regionSelect.innerHTML = '<option value="">시군구</option>';

  //* 시군구 뿌려줌
  regions.forEach((region) => {
    regionSelect.innerHTML += `<option value="">${region}</option>`;
  });
});
