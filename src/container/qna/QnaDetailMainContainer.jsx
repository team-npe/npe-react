import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import AnswerContentBox from "../../components/Qna/Detail/AnswerContentBox";

const DetailContainer = styled.div`
    padding-top: 2rem;
    padding-bottom: 5rem;
    gap: 2rem;
    flex-direction: column;
    display: flex;
    grid-column: span 8 / span 8;
`;

const DetailBox = styled.div`
    gap: 4rem;
    flex-direction: column;
    display: flex;
`;

const DetailContents = styled.div`
    gap: 2rem;
    flex-direction: column;
    display: flex;
`;

// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------

const QnaListLink = styled(Link)`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: var(--color-background-button-primary-tint-enabled, #f1f5f9);
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const QnaLinkText = styled.span`
    color: var(--color-text-button-primary, #334155);
    font-weight: 700;
`;

// ------------------------------------------------------------------------------

const QnaDetailHeaderBox = styled.div`
    position: relative;
`;

const QnaCategoryBox = styled.div`
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: var(--color-slate-100, #f1f5f9);
    border-radius: 0.25rem;
    gap: 0.375rem;
    align-items: center;
    width: fit-content;
    display: flex;
`;

const CategorySvg = styled.svg`
    fill: var(--color-green-600, #16a34a);
    display: block;
`;

const CategoryName = styled.p`
    color: var(--color-slate-500, #64748b);
    line-height: 1;
    font-weight: 700;
    font-size: 0.75rem;
`;

const QnaTitle = styled.h1`
    color: var(--color-text-bold, #0f172a);
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0;
`;

const WriteDateAndHits = styled.div`
    gap: 0.25rem;
    align-items: center;
    display: flex;
    margin-top: 0.5rem;
`;

const WriteDateAndHitsItem = styled.span`
    color: var(--color-text-subtler, #64748b);
    font-size: 0.75rem;
`;

const QnaServiceWrap = styled.div`
    top: -0.75rem;
    right: -0.75rem;
    position: absolute;
`;

const QnaServiceContainer = styled.div`
    position: relative;
`;

const QnaServiceBtn = styled.button`
    padding: 0.75rem;
`;

const QnaServiceSvg = styled.svg`
    fill: var(--color-slate-400, #94a3b8);
    display: block;
`;

const QnaServiceBox = styled.div`
    --tw-shadow-color: hsla(0, 0%, 52%, 0.1);
    --tw-shadow: var(--tw-shadow-colored);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    font-size: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: var(--color-white, #fff);
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    overflow: hidden;
    flex-direction: column;
    width: 9rem;
    display: flex;
    z-index: 2;
    top: 2.5rem;
    right: 0.75rem;
    position: absolute;
`;

const LinkShareBtn = styled.button`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: var(--color-white, #fff);
    gap: 0.5rem;
    align-items: center;
    width: 100%;
    display: flex;
    &:hover {
        background-color: var(--color-background-hover, #f8fafc);
    }
`;

const LinkShareSvg = styled.svg`
    fill: var(--color-slate-400, #94a3b8);
    width: 1.25rem;
    height: 1.25rem;
`;

const LinkShareText = styled.p`
    color: var(--color-text-bold, #0f172a);
    font-size: 0.875rem;
`;

const ModifyBtn = styled(LinkShareBtn)``;

const ModifySvg = styled.svg`
    fill: var(--color-slate-400, #94a3b8);
`;

const ModifyText = styled(LinkShareText)`
    white-space: nowrap;
`;

const DeleteBtn = styled(LinkShareBtn)``;

const DeleteSvg = styled(LinkShareSvg)`
    fill: var(--color-text-button-destructive, #ef4444);
`;

const DeleteText = styled(LinkShareText)`
    color: var(--color-text-button-destructive, #ef4444);
    white-space: nowrap;
`;

const ReportBtn = styled(LinkShareBtn)``;

const ReportSvg = styled(DeleteSvg)``;

const ReportText = styled(DeleteText)``;

const QnaDetailContent = styled.p`
    color: var(--color-text-bold, #0f172a);
    font-size: 1rem;
    white-space: pre-wrap;
    min-height: 120px;
`;

const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

const ImageWrapper = styled.div`
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    aspect-ratio: 4 / 3;
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
    margin-right: 1rem; /* 이미지 간 간격을 위한 마진 */
    flex: 0 0 auto; /* 가로로 나열된 이미지를 개별적으로 조절 */
`;

const StyledImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const QnaTagBox = styled.div`
    gap: 0.5rem;
    flex-wrap: wrap;
    display: flex;
`;

const QnaTagLink = styled(Link)`
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    background-color: var(--color-white, #fff);
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 1px;
    border-radius: 9999px;
    gap: 0.375rem;
    align-items: center;
    width: fit-content;
    display: flex;
    &:hover {
        background-color: var(--color-slate-50, #f8fafc);
    }
`;

const TagSvg = styled.svg`
    fill: #94a3b8;
    flex-shrink: 0;
`;

const TagName = styled.p`
    color: var(--color-slate-900, #0f172a);
    line-height: 1;
    font-size: 0.75rem;
    word-break: break-all;
`;

const RecommendedBox = styled.div`
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const RecommendedItems = styled.div`
    gap: 0.5rem;
    flex-direction: column;
    flex: none;
    display: flex;
    flex-basis: 50%;
`;

const RecommendedIntroSector = styled.div`
    gap: 0.25rem;
    align-items: center;
    display: flex;
`;

const IntroPhrase = styled.span`
    color: var(--color-text-subtler, #64748b);
    font-size: 0.75rem;
`;

const IntroContents = styled.div`
    position: relative;
`;

const IntroSvg = styled.svg`
    fill: var(--color-text-subtler, #64748b);
    display: block;
    &:hover + div {
        opacity: 1;
        bottom: 1.25rem;
        visibility: visible;
    }
`;

const IntroTextBox = styled.div`
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    opacity: 0;
    align-items: center;
    flex-direction: column;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-translate-x: -50%;
    display: flex;
    z-index: 1;
    left: 50%;
    bottom: 0.75rem;
    position: absolute;
    visibility: hidden;
`;

const IntroText = styled.div`
    color: var(--color-white, #fff);
    font-weight: 700;
    font-size: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: var(--color-slate-900, #0f172a);
    border-radius: 0.25rem;
    white-space: pre;
    width: 14rem;
`;

const IntroTooltipArrow = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    border-top: 8px solid rgb(15 23 42 / var(--tw-border-opacity));
    border-bottom: 0 solid transparent;
    height: 0;
    width: 0;
    border-right: 4px solid transparent;
    --tw-border-opacity: 1;
    border-left: 4px solid transparent;
`;

const RecommendedBtnSector = styled.div`
    gap: 0.5rem;
    align-items: center;
    display: flex;
`;

const RecommendedBtn = styled.button`
    padding: 0.5rem;
    padding-left: 0;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const RecommendedSvg = styled.svg`
    fill: var(--color-slate-500, #64748b);
    /* fill: var(--color-teal-600, #0d9488); */
`;

const RecommendedText = styled.span`
    color: var(--color-slate-500, #64748b);
    /* color: var(--color-teal-600, #0d9488); */
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
    font-weight: 700;
    font-size: 0.875rem;
`;

const MiddleLine = styled.div`
    --tw-bg-opacity: 1;
    background-color: rgb(226 232 240 / var(--tw-bg-opacity));
    width: 1px;
    height: 1.25rem;
`;

const SupplementBtn = styled.button`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const SupplementSvg = styled(RecommendedSvg)``;

const SupplementText = styled(RecommendedText)``;

const WriterIntroSector = styled.div`
    justify-content: flex-end;
    flex-basis: 50%;
    display: flex;
`;

const WriterIntroBox = styled.div`
    gap: 0.375rem;
    align-items: center;
    width: fit-content;
    display: flex;
`;

const WriterImage = styled.img`
    object-fit: cover;
    border-radius: 9999px;
    width: 1.5rem;
    height: 1.5rem;
    aspect-ratio: 1 / 1;
    border-width: 1px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(226 232 240 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    flex: none;
    overflow: hidden;
`;

const WriterNameBox = styled.div`
    font-size: 0.75rem;
`;

const WriterName = styled.span`
    color: var(--color-text-bold, #0f172a);
    font-weight: 700;
    font-size: 0.75rem;
`;

const WriterPosition = styled.span`
    color: var(--color-text-subtle, #334155);
    font-size: 0.75rem;
`;

const AnswerWriteSector = styled.div`
    padding: 1rem;
    background-color: var(--color-white, #fff);
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 1px;
    display: flex;
    margin-bottom: 2.75rem;
`;

const AnswerWriterProfile = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    border-width: 1px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(226 232 240 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    flex: none;
    overflow: hidden;
    border-radius: 9999px;
    -o-object-fit: cover;
    object-fit: cover;
`;

const AnswerWriteBox = styled.div`
    width: 100%;
`;

const AnswerTitle = styled.p`
    color: var(--color-text-bold, #0f172a);
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 0.375rem;
`;

const AnswerTextareaWrap = styled.div`
    background-color: var(--color-white, #fff);
    position: relative;
`;

const AnswerTextareaBox = styled.div`
    overflow-y: auto;
    max-height: 22.5rem;
`;

const AnswerTextarea = styled.textarea`
    color: var(--color-text-bold, #0f172a);
    padding: 0;
    border-width: 0;
    resize: none;
    width: 100%;
    min-height: 4.5rem;
    height: 72px !important;
    &::placeholder {
        color: var(--color-text-placeholder, #94a3b8);
    }
    &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`;

const AnswerRegistrationWrap = styled.div`
    padding-top: 0.75rem;
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    margin-top: 0.75rem;
`;

const AnswerRegistrationBtn = styled.button`
    color: ${({ isWrite }) => (isWrite ? "var(--color-white, #fff)" : "var(--color-text-button-disabled, #94a3b8)")};
    font-weight: 700;
    font-size: 0.75rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: ${({ isWrite }) => (isWrite ? "var(--color-background-button-primary-bold-enabled, #334155)" : "var(--color-background-button-disabled, #f1f5f9)")};
    border-color: ${({ isWrite }) => (isWrite ? "var(--color-slate-700, #334155)" : "var(--color-slate-100, #f1f5f9)")};
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    &:hover {
        background-color: ${({ isWrite }) => (isWrite ? "var(--color-background-button-primary-bold-hover, #1e293b)" : "")};
        cursor: ${({ isWrite }) => (isWrite ? "pointer" : "default")};
    }
`;

const AnswerRegistrationText = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const AnswerListSector = styled.div`
    gap: 1.25rem;
    flex-direction: column;
    display: flex;
    margin-top: 0.5rem;
`;

const AnswerListHeader = styled.p`
    color: var(--color-slate-900, #0f172a);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

const AnswerListContainer = styled.div`
    gap: 1.25rem;
    flex-direction: column;
    display: flex;
`;

function QnaDetailMainContainer() {
    const [isQnaService, setIsQnaService] = useState(false);
    const [textareaValue, setTextareaValue] = useState("");

    const handleClickOutside = (e) => {
        setIsQnaService(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const QnaServiceShow = (e) => {
        e.stopPropagation();
        setIsQnaService((isQnaService) => !isQnaService);
    };

    const images = [
        "https://careerly.co.kr//_next/image?url=https%3A%2F%2Fpubly.imgix.net%2Fuser-uploaded%2F264289%2F2023.02%2Fbcf19d4b1ac99ac4aadfd337e2a5c1573be8f1ac53913328244e075d8a153642.png%3Fw%3D800%26h%3D800%26auto%3Dformat%26fm%3Dpng",
        "https://careerly.co.kr//_next/image?url=https%3A%2F%2Fpubly.imgix.net%2Fuser-uploaded%2F264289%2F2023.02%2Fbcf19d4b1ac99ac4aadfd337e2a5c1573be8f1ac53913328244e075d8a153642.png%3Fw%3D800%26h%3D800%26auto%3Dformat%26fm%3Dpng",
        // 필요한 만큼 이미지 URL 추가
    ];

    const tags = ["react", "css", "typescript", "javascript"];

    const handleTextareaChange = (e) => {
        console.log(e.target.value);
        if (e.target.value) {
            console.log("트루 들어옴");
        }
        setTextareaValue(e.target.value);
    };

    return (
        <DetailContainer>
            <DetailBox>
                <DetailContents>
                    <QnaDetailHeaderBox>
                        <QnaCategoryBox>
                            <CategorySvg width="12" height="12" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g id="style=outline">
                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M14.2425 3.02985C14.7783 3.1638 15.1041 3.70673 14.9701 4.24253L10.9701 20.2425C10.8362 20.7783 10.2933 21.1041 9.75746 20.9701C9.22167 20.8362 8.89591 20.2933 9.02986 19.7575L13.0299 3.75746C13.1638 3.22166 13.7067 2.8959 14.2425 3.02985ZM6.70711 7.29289C7.09763 7.68341 7.09763 8.31658 6.70711 8.7071L3.41421 12L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L5.29289 7.29289C5.68342 6.90236 6.31658 6.90236 6.70711 7.29289ZM17.2929 7.29289C17.6834 6.90236 18.3166 6.90236 18.7071 7.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L18.7071 16.7071C18.3166 17.0976 17.6834 17.0976 17.2929 16.7071C16.9024 16.3166 16.9024 15.6834 17.2929 15.2929L20.5858 12L17.2929 8.7071C16.9024 8.31658 16.9024 7.68341 17.2929 7.29289Z"></path>
                                    </g>
                                </g>
                            </CategorySvg>
                            <CategoryName>개발자</CategoryName>
                        </QnaCategoryBox>
                        <div>
                            <QnaTitle>아래 사진과 같은 GNB를 만들어야 합니다.</QnaTitle>
                        </div>
                        <WriteDateAndHits>
                            <WriteDateAndHitsItem>2023년 02월 27일</WriteDateAndHitsItem>
                            <WriteDateAndHitsItem>•</WriteDateAndHitsItem>
                            <WriteDateAndHitsItem>조회 214</WriteDateAndHitsItem>
                        </WriteDateAndHits>
                        <QnaServiceWrap>
                            <QnaServiceContainer>
                                <QnaServiceBtn onClick={QnaServiceShow}>
                                    <QnaServiceSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g id="style=outline">
                                                <path
                                                    id="Vector (Stroke)"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C14 5.53043 13.7893 6.03914 13.4142 6.41421C13.0391 6.78929 12.5304 7 12 7C11.4696 7 10.9609 6.78929 10.5858 6.41421C10.2107 6.03914 10 5.53043 10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579ZM10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858ZM10.5858 17.5858C10.9609 17.2107 11.4696 17 12 17C12.5304 17 13.0391 17.2107 13.4142 17.5858C13.7893 17.9609 14 18.4696 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10 18.4696 10.2107 17.9609 10.5858 17.5858Z"
                                                ></path>
                                            </g>
                                        </g>
                                    </QnaServiceSvg>
                                </QnaServiceBtn>
                                {isQnaService && (
                                    <QnaServiceBox>
                                        <LinkShareBtn>
                                            <LinkShareSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="none">
                                                <g role="none">
                                                    <g id="style=outline" role="none">
                                                        <path
                                                            id="Vector (Stroke)"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.2093 2.42247C17.1582 1.94792 18.2568 1.86976 19.2633 2.20519C20.2699 2.54062 21.1019 3.26216 21.5765 4.21108C21.8115 4.68093 21.9516 5.19247 21.9889 5.71648C22.0262 6.24049 21.9599 6.76671 21.7938 7.2651C21.6277 7.76349 21.3651 8.22428 21.0209 8.62117C20.6767 9.01807 20.2577 9.34328 19.7879 9.57825C19.318 9.81323 18.8065 9.95335 18.2825 9.99063C17.7585 10.0279 17.2322 9.96161 16.7339 9.79552C16.2355 9.62944 15.7747 9.36681 15.3778 9.02264C15.2363 8.89996 15.104 8.76778 14.9815 8.62718L9.91092 11.1625C9.96868 11.4331 9.9991 11.7135 9.9991 12.0004C9.9991 12.2873 9.96868 12.5677 9.91092 12.8382L14.9815 15.3735C15.4468 14.8389 16.0501 14.4328 16.7339 14.2049C17.2324 14.0387 17.7586 13.9724 18.2827 14.0096C18.8068 14.0469 19.3184 14.187 19.7883 14.4219C20.7374 14.8965 21.4591 15.7286 21.7946 16.7352C22.1301 17.7418 22.0521 18.8405 21.5775 19.7896C21.103 20.7386 20.2709 21.4603 19.2643 21.7959C18.2576 22.1314 17.1589 22.0533 16.2099 21.5788C15.2608 21.1043 14.5391 20.2722 14.2036 19.2655C13.9757 18.5817 13.9386 17.8554 14.087 17.1624L9.01662 14.6272C8.65272 15.045 8.20349 15.3856 7.69493 15.6235C6.87879 16.0053 5.95764 16.1004 5.08073 15.8933C4.20381 15.6862 3.4225 15.1891 2.86335 14.4826C2.30421 13.776 2 12.9014 2 12.0004C2 11.0993 2.30421 10.2247 2.86335 9.51813C3.4225 8.81158 4.20381 8.3145 5.08073 8.10743C5.95764 7.90035 6.87879 7.99541 7.69493 8.37721C8.20349 8.61512 8.65272 8.95568 9.01662 9.37357L14.087 6.83838C13.9386 6.14549 13.9756 5.41933 14.2034 4.73562C14.5389 3.72908 15.2604 2.89701 16.2093 2.42247ZM7.78873 12.895C7.92307 12.6263 7.9991 12.3231 7.9991 12.0004C7.9991 11.6776 7.92307 11.3744 7.78873 11.1057M7.78867 12.8951C7.58714 13.298 7.2555 13.6211 6.84746 13.8119C6.43939 14.0028 5.97882 14.0504 5.54036 13.9468C5.10191 13.8433 4.71125 13.5948 4.43168 13.2415C4.15211 12.8882 4 12.4509 4 12.0004C4 11.5498 4.15211 11.1125 4.43168 10.7592C4.71125 10.406 5.10191 10.1574 5.54036 10.0539C5.97882 9.95036 6.43939 9.99789 6.84746 10.1888C7.2555 10.3797 7.58714 10.7027 7.78867 11.1056M18.631 4.10261C18.1277 3.93488 17.5784 3.97396 17.1039 4.21125C16.6294 4.44855 16.2686 4.86462 16.1009 5.36793C15.9331 5.87125 15.9722 6.42058 16.2095 6.89508C16.327 7.13003 16.4896 7.33953 16.6881 7.51163C16.8865 7.68373 17.117 7.81506 17.3662 7.89811C17.6154 7.98116 17.8785 8.01431 18.1406 7.99567C18.4026 7.97703 18.6584 7.90696 18.8933 7.78947C19.1283 7.67197 19.3378 7.50935 19.5099 7.31088C19.682 7.11242 19.8133 6.882 19.8964 6.63279C19.9794 6.38357 20.0126 6.12044 19.9939 5.85841C19.9753 5.59638 19.9052 5.34059 19.7877 5.10564C19.5504 4.63114 19.1343 4.27034 18.631 4.10261ZM18.1409 16.0046C17.8788 15.986 17.6157 16.0191 17.3664 16.1022C16.863 16.27 16.4468 16.6309 16.2095 17.1056C15.9722 17.5802 15.9332 18.1297 16.101 18.6331C16.2688 19.1365 16.6297 19.5526 17.1043 19.7899C17.5789 20.0272 18.1284 20.0663 18.6318 19.8985C19.1352 19.7307 19.5514 19.3698 19.7887 18.8951C20.026 18.4205 20.065 17.8711 19.8972 17.3677C19.7294 16.8642 19.3685 16.4481 18.8939 16.2108C18.6589 16.0933 18.403 16.0232 18.1409 16.0046Z"
                                                            role="none"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </LinkShareSvg>
                                            <LinkShareText>링크 복사</LinkShareText>
                                        </LinkShareBtn>
                                        {/* 작성자와 로그인 회원의 정보가 같은 경우 */}
                                        <ModifyBtn>
                                            <ModifySvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <g id="style=outline">
                                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"></path>
                                                    </g>
                                                </g>
                                            </ModifySvg>
                                            <ModifyText>수정</ModifyText>
                                        </ModifyBtn>
                                        <DeleteBtn>
                                            <DeleteSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <g id="style=outline">
                                                        <path
                                                            id="Vector (Stroke)"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19.9311L19.1305 19.213C19.1305 19.2131 19.1305 19.2129 19.1305 19.213C19.0765 19.9698 18.7379 20.6783 18.1826 21.1954C17.6274 21.7125 16.8968 22 16.138 22H7.86202C7.10323 22 6.37262 21.7125 5.81735 21.1954C5.26213 20.6783 4.92347 19.97 4.86954 19.2132C4.86953 19.2132 4.86955 19.2133 4.86954 19.2132L4.06886 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H8V4C8 3.46957 8.21071 2.96086 8.58579 2.58579ZM10 6H14V4H10V6ZM6.07395 8L6.86446 19.0708C6.88242 19.3231 6.99533 19.5594 7.18042 19.7318C7.36551 19.9042 7.60905 20 7.862 20H16.138C16.391 20 16.6345 19.9042 16.8196 19.7318C17.0047 19.5594 17.1176 19.3233 17.1355 19.071L17.926 8H6.07395ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </DeleteSvg>
                                            <DeleteText>삭제</DeleteText>
                                        </DeleteBtn>
                                        {/* 작성자와 로그인 회원의 정보가 다를 경우 */}
                                        <ReportBtn>
                                            <ReportSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <g id="style=outline">
                                                        <path
                                                            id="Vector (Stroke)"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M5.5 4C5.23478 4 4.98043 4.10536 4.79289 4.29289C4.60536 4.48043 4.5 4.73478 4.5 5V14.1716C4.8182 14.0591 5.15606 14 5.5 14H12C12.2652 14 12.5196 14.1054 12.7071 14.2929L13.4142 15H19.882L17.6056 10.4472C17.4648 10.1657 17.4648 9.83431 17.6056 9.55279L19.882 5H13.5V9C13.5 9.55228 13.0523 10 12.5 10C11.9477 10 11.5 9.55228 11.5 9V4H5.5ZM13.4142 3H21.5C21.8466 3 22.1684 3.17945 22.3507 3.47427C22.5329 3.76909 22.5494 4.13723 22.3944 4.44721L19.618 10L22.3944 15.5528C22.5494 15.8628 22.5329 16.2309 22.3507 16.5257C22.1684 16.8205 21.8466 17 21.5 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071L11.5858 16H5.5C5.23478 16 4.98043 16.1054 4.79289 16.2929C4.60536 16.4804 4.5 16.7348 4.5 17V21C4.5 21.5523 4.05228 22 3.5 22C2.94772 22 2.5 21.5523 2.5 21V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289L13.4142 3Z"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </ReportSvg>
                                            <ReportText>신고</ReportText>
                                        </ReportBtn>
                                    </QnaServiceBox>
                                )}
                            </QnaServiceContainer>
                        </QnaServiceWrap>
                    </QnaDetailHeaderBox>
                    <QnaDetailContent>
                        위쪽에 있는 메뉴에 마우스를 올리면 전체 메뉴가 드랍 되는 형태의 헤더 인데 <br />
                        위쪽 메뉴에 마우스를 올리면 텍스트 컬러와 밑줄이 생기고 그 상태가 유지 되면서 <br />
                        하위 메뉴를 컨트롤 해야 하는데 마우스 커서를 하위 메뉴 쪽으로 가져갔을때 위쪽 메뉴의 컬러와 <br />
                        밑줄을 어떻게 컨트롤 해야 할지 잘 몰라서 질문 드립니다..
                        <br />
                        <br />
                        사진이 왜케 깨지는지 잘 모르겠네요 ..
                    </QnaDetailContent>
                    <ImgBox>
                        {images.map((src, index) => (
                            <ImageWrapper key={index}>
                                <StyledImg alt="이미지 설명" srcSet={`${src}&w=1200&q=100 1x, ${src}&w=3840&q=100 2x`} src={src} decoding="async" />
                            </ImageWrapper>
                        ))}
                    </ImgBox>
                    <QnaTagBox>
                        {tags.map((tag, index) => (
                            <QnaTagLink key={index} to={``}>
                                <TagSvg width="12" height="12" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <g id="style=outline">
                                            <path
                                                id="Vector (Stroke)"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.2425 3.02985C11.7783 3.1638 12.1041 3.70673 11.9701 4.24253L11.0308 7.99999H14.9692L16.0299 3.75746C16.1638 3.22166 16.7067 2.8959 17.2425 3.02985C17.7783 3.1638 18.1041 3.70673 17.9701 4.24253L17.0308 7.99999H20C20.5523 7.99999 21 8.44771 21 8.99999C21 9.55228 20.5523 9.99999 20 9.99999H16.5308L15.5308 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H15.0308L13.9701 20.2425C13.8362 20.7783 13.2933 21.1041 12.7575 20.9701C12.2217 20.8362 11.8959 20.2933 12.0299 19.7575L12.9692 16H9.03078L7.97014 20.2425C7.83619 20.7783 7.29326 21.1041 6.75746 20.9701C6.22167 20.8362 5.89591 20.2933 6.02986 19.7575L6.96922 16H4C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14H7.46922L8.46922 9.99999H6C5.44772 9.99999 5 9.55228 5 8.99999C5 8.44771 5.44772 7.99999 6 7.99999H8.96922L10.0299 3.75746C10.1638 3.22166 10.7067 2.8959 11.2425 3.02985ZM10.5308 9.99999L9.53078 14H13.4692L14.4692 9.99999H10.5308Z"
                                            ></path>
                                        </g>
                                    </g>
                                </TagSvg>
                                <TagName>{tag}</TagName>
                            </QnaTagLink>
                        ))}
                    </QnaTagBox>
                    <RecommendedBox>
                        <RecommendedItems>
                            <RecommendedIntroSector>
                                <IntroPhrase>이 질문이 도움이 되었나요?</IntroPhrase>
                                <IntroContents>
                                    <IntroSvg width="16" height="16" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g id="style=outline">
                                                <path id="Icon (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 8C11 7.44772 11.4477 7 12 7H12.01C12.5623 7 13.01 7.44772 13.01 8C13.01 8.55228 12.5623 9 12.01 9H12C11.4477 9 11 8.55228 11 8ZM10 12C10 11.4477 10.4477 11 11 11H12C12.5523 11 13 11.4477 13 12V15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H12C11.4477 17 11 16.5523 11 16V13C10.4477 13 10 12.5523 10 12Z"></path>
                                            </g>
                                        </g>
                                    </IntroSvg>
                                    <IntroTextBox>
                                        <IntroText>
                                            '추천해요' 버튼을 누르면 좋은 질문이
                                            <br />
                                            더 많은 사람에게 노출될 수 있어요.
                                            <br />
                                            '보충이 필요해요' 버튼을 누르면 질문자에게
                                            <br />
                                            질문 내용 보충을 요청하는 알림이 가요.
                                        </IntroText>
                                        <IntroTooltipArrow />
                                    </IntroTextBox>
                                </IntroContents>
                            </RecommendedIntroSector>
                            <RecommendedBtnSector>
                                <RecommendedBtn>
                                    <RecommendedSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g id="style=outline">
                                                <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M19.7071 10.7071C19.3166 11.0976 18.6834 11.0976 18.2929 10.7071L13 5.41423L13 21C13 21.5523 12.5523 22 12 22C11.4478 22 11 21.5523 11 21L11.0001 5.4142L5.7071 10.7071C5.31658 11.0976 4.68341 11.0976 4.29289 10.7071C3.90237 10.3166 3.90237 9.68341 4.29289 9.29289L11.2929 2.29289C11.4805 2.10535 11.7348 2 12.0001 2C12.2653 2 12.5196 2.10536 12.7072 2.2929L19.7071 9.2929C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071Z"></path>
                                            </g>
                                        </g>
                                    </RecommendedSvg>
                                    <RecommendedText>추천해요 0</RecommendedText>
                                </RecommendedBtn>
                                <MiddleLine />
                                <SupplementBtn>
                                    <SupplementSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g id="style=outline">
                                                <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M4.2929 13.2929C4.68342 12.9024 5.31659 12.9024 5.70711 13.2929L10.9999 18.5858L10.9999 3C10.9999 2.44772 11.4477 2 11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3L12.9999 18.5858L18.2929 13.2929C18.6834 12.9024 19.3166 12.9024 19.7071 13.2929C20.0976 13.6834 20.0976 14.3166 19.7071 14.7071L12.7071 21.7071C12.5195 21.8946 12.2652 22 11.9999 22C11.7347 22 11.4804 21.8946 11.2928 21.7071L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.2929 13.2929Z"></path>
                                            </g>
                                        </g>
                                    </SupplementSvg>
                                    <SupplementText>보충이 필요해요 0</SupplementText>
                                </SupplementBtn>
                            </RecommendedBtnSector>
                        </RecommendedItems>
                        <WriterIntroSector>
                            <WriterIntroBox>
                                <WriterImage src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png" />
                                <WriterNameBox>
                                    <WriterName>홍길동 </WriterName>
                                    <WriterPosition>사용자 직책 </WriterPosition>
                                    <WriterPosition>님의 질문</WriterPosition>
                                </WriterNameBox>
                            </WriterIntroBox>
                        </WriterIntroSector>
                    </RecommendedBox>
                </DetailContents>
                <div>
                    <AnswerWriteSector>
                        <AnswerWriterProfile src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png" />
                        <AnswerWriteBox>
                            <AnswerTitle>답변하기</AnswerTitle>
                            <AnswerTextareaWrap>
                                <AnswerTextareaBox>
                                    <AnswerTextarea placeholder="답변으로 나누고 싶은 경험이 있으신가요?" onChange={handleTextareaChange}></AnswerTextarea>
                                </AnswerTextareaBox>
                            </AnswerTextareaWrap>
                            <AnswerRegistrationWrap>
                                <AnswerRegistrationBtn isWrite={textareaValue} disabled={textareaValue}>
                                    <AnswerRegistrationText>답변 등록</AnswerRegistrationText>
                                </AnswerRegistrationBtn>
                            </AnswerRegistrationWrap>
                        </AnswerWriteBox>
                    </AnswerWriteSector>
                    <AnswerListSector>
                        <div>
                            <AnswerListHeader>답변 1</AnswerListHeader>
                            <AnswerListContainer>
                                <AnswerContentBox />
                            </AnswerListContainer>
                        </div>
                    </AnswerListSector>
                </div>
                <QnaListLink>
                    <QnaLinkText>목록으로</QnaLinkText>
                </QnaListLink>
            </DetailBox>
        </DetailContainer>
    );
}
export default QnaDetailMainContainer;
