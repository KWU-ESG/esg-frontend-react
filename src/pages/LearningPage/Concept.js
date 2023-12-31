import * as S from "../../styles/LearningPage/Concept.style";

function Concept() {
  return (
    <>
      <S.Container>
        <S.Title>
          기업이 <S.Blue>지속가능한 경영</S.Blue>을 달성하기 위한 3가지 핵심
          요소
        </S.Title>

        <S.CardBox>
          <S.Card>
            <S.CardHeader>
              <i className="fa-regular fa-star"></i> 환경 (Environment)
            </S.CardHeader>
            <S.CardList>
              <li>가장 핵심적인 사안은 기후변화와 탄소배출 관련 이슈</li>
              <li>기업은 지금 탄소 제로화를 추구해야함</li>
              <li>
                탄소 문제와 더불어 자원 및 폐기물 관리, 에너지 효율화도 현재
                기업의 중요한 이슈
              </li>
            </S.CardList>
          </S.Card>

          <S.Card>
            <S.CardHeader>
              <i className="fa-regular fa-star"></i> 사회 (Social)
            </S.CardHeader>
            <S.CardList>
              <li>
                기업의 인권보장, 데이터 보호, 다양성 고려, 공급 망 및 지역사회와
                협력 관계 구축에 힘써야 합니다.
              </li>
              <li>
                사회적인 문제는 기업이 마땅한 사회적 책임을 잘 수행하는 지를
                판별합니다.
              </li>
            </S.CardList>
          </S.Card>

          <S.Card>
            <S.CardHeader>
              <i className="fa-regular fa-star"></i> 지배구조 (Governance)
            </S.CardHeader>
            <S.CardList>
              <li>
                환경과 사회 가치를 기업이 실현하도록 뒷받침하는 투명한 이사회
                구성과 감시위원회 구축해야 합니다.
              </li>
              <li>기업윤리를 준수하고 높은 지배구조 가치를 확보합니다.</li>
            </S.CardList>
          </S.Card>
        </S.CardBox>

        <S.Title>
          <S.Br>
            1987년 UNEP와 WCED에서 <S.Blue>지속가능한 발전</S.Blue>을 최초
            언급해{" "}
          </S.Br>
          <S.Br>ESG 개념이 시작됩니다.</S.Br>
        </S.Title>
        <S.Title>
          미래세대에 필요한 자원과 잠재력을 훼손하지 않으면서{" "}
          <S.Br>지속적인 발전을 의미합니다.</S.Br>
        </S.Title>
        <S.Title>
          <S.Br>2006년 UN PRI를 통해 구체화가 되고, </S.Br>
          <S.Br>2019년 BRT선언과 2020년 세계경제포럼에서 강조되어,</S.Br>
        </S.Title>
        <S.Title>
          ESG는 <S.Blue>기업 경영의 새로운 패러다임</S.Blue>으로 자리잡게
          되었습니다.
        </S.Title>
      </S.Container>
    </>
  );
}

export default Concept;
