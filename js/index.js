import regionData from "./region.js"; // 지역 데이터 가져오기
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
  citySelect.innerHTML += `<option value="${key}">${key}</option>`;
});

//* city select에서 선택된 값에 따라 region select 업데이트
citySelect.addEventListener("change", () => {
  const selectedCity = citySelect.value;
  console.log(citySelect.value);
  const regions = regionData[selectedCity] || [];
  //* 시군구 초기화
  regionSelect.innerHTML = '<option value="">시군구</option>';

  //* 시군구 뿌려줌
  regions.forEach((region) => {
    regionSelect.innerHTML += `<option value="${region}">${region}</option>`;
  });
});
