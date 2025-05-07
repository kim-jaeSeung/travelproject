import travelApi from "./api/travelApi.js"; // 지역 데이터 가져오기

//* 시도 선택 select
const citySelect = document.getElementById("city");
//* 시군구 선택 select

//* regionData의 키 값을 가져와 city option에 추가
travelApi().then((data) => {
  Object.keys(data).forEach((key) => {
    //* Object.keys를 사용하여 data 객체의 키를 가져와서 forEach로 반복
    citySelect.innerHTML += `<option value="${key}">${key}</option>`;
  });

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value; //* 선택된 citySelect의 value값 가져옴
    console.log(selectedCity); //* 선택된 시도 확인
    const regions = data[selectedCity]; //* 선택된 citySelect의 value값에 맞는 데이터 가져옴
    console.log(regions); //* 선택된 시도의 지역 목록 확인

    if (regions.length > 0) {
      // 랜덤 인덱스 생성
      const randomIndex = Math.floor(Math.random() * regions.length); //* 가져온 value값에 길이 만큼 렌덤 함수 생성
      const randomRegion = regions[randomIndex]; //* 랜덤으로 선택된 지역
      console.log(randomRegion); //* 랜덤으로 선택된 데이터 확인

      // HTML 업데이트
      document.getElementById("travelDataWrapContainer").innerHTML = `
        <div class="contentWrap">
          <h4>${randomRegion.name}</h4>
          <img src="img/gaga.png" alt="">
          <p>${randomRegion.description}</p>
        </div>
        <div>
          <h4>기본정보</h4>
          <div class="mapContent">

          </div>
          <div class="addInfo flex align-items-center">
            <p>주소</p>
            <span>${randomRegion.location}</span>
          </div>
          <div class="addInfo flex align-items-center">
            <p>영업시간</p>
            <span>${randomRegion.openingHours}</span>
          </div>
          <div class="addInfo flex align-items-center">
            <p>정기 휴무일</p>
            <span>${randomRegion.closedDays}</span>
          </div>
        </div>
      `;
    } else {
      //* 선택된 시도에 지역 데이터가 없는 경우 예외처리
      document.getElementById("travelDataWrapContainer").innerHTML = `
        <p>해당 시도에 대한 데이터가 없습니다.</p>
      `;
    }
  });
});
