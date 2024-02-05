export interface Project {
    title: string;
    desc: string;
    skillDesc: string[];
    team: null | {
      front: number;
      back: number;
      myRole: string[];
    };
    links: Link[];
    dev: null | {
      start?: string;
      end?: string;
      period?: string;
    };
    stack: string[];
    prod: {
      isTeam: boolean;
      desktop: ProdPage[];
      tablet: ProdPage[];
      mobile: ProdPage[];
    };
  }
  
  interface Link {
    name: string;
    url: string;
  }
  
  interface ProdPage {
    name: string;
    img?: string;
    vid?: string;
    vidDesc?: string;
  }
  
  export const projectsData: Project[] = [
    {
      title: '🌊 Was\'surf',
      desc: '파도 정보 보고 서핑장소 찾는 서비스',
      skillDesc: [
        '캐러셀 슬라이드 구현',
        '로딩 인디게이터',
        '무한스크롤 구현',
        '날씨 API를 이용한 날씨 정렬 서비스',
      ],
      team: {
        front: 3,
        back: 3,
        myRole: [
          '메인 페이지 스타일링 & 기능 구현',
          '커뮤니티 게시판 CRUD & 게시판 무한스크롤',
          '서핑장소 찾기 페이지 스타일링',
          '서핑장소 찾기 기상청 api 연동',
          '서핑장소 찾기 평점 별로 정렬',
        ],
      },
      links: [
        {
          name: '배포',
          url: 'http://wassurf2.s3-website.ap-northeast-2.amazonaws.com/',
        },
        {
          name: '깃허브',
          url: 'https://github.com/codestates-seb/seb42_main_007',
        },
        {
          name: '요구사항 정의서',
          url: 'https://docs.google.com/spreadsheets/d/1NeADUBke6HSn23LA6O0oQlLJwCN74s9yQ4p06pi_WSQ/edit#gid=0',
        },
        // {
        //   name: '구현 완료 화면',
        //   url: '',
        // },
      ],
      dev: {
        start: '2023-03-03',
        end: '2023-03-24',
      },
      stack: [
        'React',
        'Axios',
        'Styled-components',
        'React-Router',
      ],
      prod: {
        isTeam: true,
        desktop: [
          {
            name: '메인 페이지',
            vid: 'rp8r1mLOY74',
          },
          {
            name: '서핑스팟 찾기 페이지',
            vid: 'rT_c0PzQmPQ',
          },
          {
            name: '커뮤니티 페이지',
            vid: 'IEy3d72Rnug',
          },
          {
            name: '강습예약 페이지',
            vid: 'hI7eLQlPilU',
          },
        ],
        tablet: [
          {
            name: '메인 페이지',
            vid: 'D_JsBL4N_4Y',
          },
          {
            name: '서핑스팟 찾기 페이지',
            vid: '88YdHQVpaU0',
          },
          {
            name: '커뮤니티 페이지',
            vid: '0d7q2Lvfiu8',
          },
          {
            name: '강습예약 페이지',
            vid: 'pYIjzj44pBg',
          },
        ],
        mobile: [
          {
            name: '메인 페이지',
            vid: '5jpRw1slyww',
          },
          {
            name: '서핑스팟 찾기 페이지',
            vid: 'nHyguTpfpIc',
          },
          {
            name: '커뮤니티 페이지',
            vid: 'SU67dX2dU88',
          },
          {
            name: '강습예약 페이지',
            vid: 'mlksjr5q26M',
          },
        ],
      },
    },
    {
        title: '📰 포트폴리오',
        desc: '포트폴리오 사이트',
        skillDesc: [
            'Vite를 이용한 프로젝트 개발환경 구축',
            'Styled component의 Theme Provider를 이용한 다크모드 구현',
            'localStorage를 통한 테마 모드 유지',
            '반응형 웹 구현',
        ],
        team: null,
        links: [
          {
            name: '배포',
            url: '',
          },
          {
            name: '깃허브',
            url: 'https://github.com/Hanjunn22/portfolio',
          },
        ],
        dev: {
            start: '2024-01-08',
            end: '2024-1-20',
        },
        prod: {
          isTeam: false,
          desktop: [
            {
              name: '서비스 시연',
              vid: 'kcMbnqpx7ho',
            },
          ],
          tablet: [
            {
              name: '서비스 시연',
              vid: 'ee8iCfevFRk',
            },
          ],
          mobile: [
            {
              name: '서비스 시연',
              vid: 'w2ovJeNBpF8',
            },
          ],
        },
        stack: ['React', 'TypeScript', 'Styled-components', 'React-Router']
      }
]