import Banner from './_components/Banner';
import Section from './_components/Section';

function Home() {
  return (
    <div>
      <Banner
        isButton
        text1="일상의 모든 물건을"
        text2="거래해 보세요"
        src="/images/Img_home_top.png"
        alt="로고"
      />
      <div className="flex flex-col justify-center items-center mt-[70px]">
        {/* <Section
          badge="HotItem"
          title1="인기 상 i품을"
          title2="확인 해 보세요"
          content1="가장 HOT한 중고거래 물품을"
          content2="판다마켓에서 확인해보세요"
          src="/images/Img_home_hot_item.png"
          alt="판다마켓"
        />
        <Section
          flex_reverse
          badge="search"
          title1="구매를 원하는"
          title2="상품을 검색하세요"
          content1="구매하고 싶은 물픔은 검색해서"
          content2="쉽게 찾아보세요"
          src="/images/Img_home_search.png"
          alt="판다마켓"
        />
        <Section
          badge="register"
          title1="판매를 원하는"
          title2="상품을 등록하세요"
          content1="어떤 물건이든 판매하고 싶은 상품을"
          content2="쉽게 등록하세요"
          src="/images/Img_home_register.png"
          alt="판다마켓"
        /> */}
      </div>
      <Banner
        text1="믿을 수 있는"
        text3="판다마켓 중고거래"
        src="/images/Img_home_bottom.png"
        alt="로고"
      />
    </div>
  );
}

export default Home;
