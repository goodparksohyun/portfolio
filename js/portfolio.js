"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // F5버튼 클릭시 첫화면으로 돌아가기
  window.onload = function () {
    setTimeout(() => {
      scrollTo(0, 0);
    }, 300);
  };

  let sections = document.querySelectorAll(".main-content");
  //첫번째 섹션 숨기기
  setTimeout(() => {
    sections[0].style.display = "none";
  }, 2000);

  //두번째 섹션 숨기기
});
const worksSection = document.querySelector(".greetings");
// .sc_works 섹션으로 스크롤하는 함수
function scrollToWorks() {
  worksSection.scrollIntoView({ behavior: "smooth" });
}

// "감사합니다" 애니메이션이 끝날 때 블러 효과 적용 및 복원 처리
document.addEventListener("DOMContentLoaded", () => {
  const thankYouText = document.getElementById("main-content2");

  // 애니메이션 종료 이벤트 감지
  thankYouText.addEventListener("animationend", () => {
    // 블러 효과 적용
    thankYouText.style.transition = "filter 2s";
    thankYouText.style.filter = "blur(10px)";

    // 블러 효과가 끝난 후 .greetings 섹션으로 이동
    setTimeout(() => {
      scrollToWorks();

      // 스크롤 이동 후 바로 블러 효과 제거 (원래 상태로 복원)
      thankYouText.style.filter = "blur(0)";
      const greetingsset = document.querySelector(".greetings-page");
      const introductionsset = document.querySelector(".introduction-page");
      const spaceeffectset = document.querySelector(".space-effect");
      setTimeout(() => {
        greetingsset.style.opacity = 1;
        greetingsset.style.transform = "translate(0)";
      }, 300);
    }, 1000); // 블러 처리 후 1초 후에 이동
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 각 버튼을 선택
  const allButton = document.querySelector(".btns button:nth-child(1)");
  const pcButton = document.querySelector(".btns button:nth-child(2)");
  const mobileButton = document.querySelector(".btns button:nth-child(3)");
  const responsiveButton = document.querySelector(".btns button:nth-child(4)");
  const cloneCodingButton = document.querySelector(".btns button:nth-child(5)");

  // 모든 .wrap 요소를 선택
  const wrapElements = document.querySelectorAll(".wrap");

  // All 버튼 클릭 시 모든 .wrap 요소를 서서히 나타나게
  allButton.addEventListener("click", () => {
    wrapElements.forEach((wrap) => {
      wrap.style.display = "";
      wrap.style.opacity = "0"; // 초기 투명도 설정
      wrap.style.transition = "opacity 0.5s ease"; // 서서히 나타나도록 transition 추가

      setTimeout(() => {
        wrap.style.opacity = "1"; // 0.5초 후에 나타나도록 설정
      }, 10); // 약간의 지연시간을 주어 애니메이션이 적용되도록 함
    });
  });

  // 공통 함수: 서서히 사라지게 하는 함수
  const fadeOut = (wrap) => {
    wrap.style.transition = "opacity 0.5s ease";
    wrap.style.opacity = "0"; // 서서히 사라지게 설정
    setTimeout(() => {
      wrap.style.display = "none"; // 애니메이션 후 display를 none으로 설정
    }, 500); // 애니메이션 시간과 동일하게 설정
  };

  // "pc" 버튼 클릭 시
  pcButton.addEventListener("click", () => {
    wrapElements.forEach((wrap, index) => {
      if (index === 1) {
        wrap.style.opacity = "1"; // 두 번째 .wrap은 보이게
        wrap.style.display = "";
      } else {
        fadeOut(wrap); // 첫 번째 및 세 번째 .wrap을 서서히 사라지게 함
      }
    });
  });

  // "mobile" 버튼 클릭 시
  mobileButton.addEventListener("click", () => {
    wrapElements.forEach((wrap, index) => {
      if (index === 1) {
        fadeOut(wrap); // 두 번째 .wrap을 서서히 사라지게 함
      } else {
        wrap.style.opacity = "1"; // 첫 번째 및 세 번째 .wrap은 보이게
        wrap.style.display = "";
      }
    });
  });

  // "반응형" 버튼 클릭 시
  responsiveButton.addEventListener("click", () => {
    wrapElements.forEach((wrap, index) => {
      if (index === 1) {
        fadeOut(wrap); // 두 번째 .wrap을 서서히 사라지게 함
      } else {
        wrap.style.opacity = "1"; // 첫 번째 및 세 번째 .wrap은 보이게
        wrap.style.display = "";
      }
    });
  });

  // "클론코딩" 버튼 클릭 시
  cloneCodingButton.addEventListener("click", () => {
    wrapElements.forEach((wrap, index) => {
      if (index === 1) {
        wrap.style.opacity = "1"; // 두 번째 .wrap은 보이게
        wrap.style.display = "";
      } else {
        fadeOut(wrap); // 첫 번째 및 세 번째 .wrap을 서서히 사라지게 함
      }
    });
  });
});

// 마우스 무브 이벤트를 body에 적용
const cursorRounded = document.querySelector(".rounded");
const cursorPointed = document.querySelector(".pointed");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);

// 라인을 따라 움직이는 원
document.addEventListener("DOMContentLoaded", () => {
  const ellipsePath = document.querySelector("ellipse").getAttribute("d");
  const smallCircle = document.querySelector(".small-circle");

  // 작은 원에 타원 경로
  smallCircle.style.offsetPath = `path("M 0 62.5 A 500 62.5 0 1 1 1000 62.5 A 500 62.5 0 1 1 0 62.5")`;
});

//
