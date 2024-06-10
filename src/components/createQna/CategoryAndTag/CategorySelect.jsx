import styled from "styled-components";
import { CreateQnaPilsu } from "../../../container/CreateQna/CategoryAndTag";
import { categoryList } from "../../../service/dummyData";
import { useContext, useEffect, useRef, useState } from "react";
import { CreateQnaDataContext } from "../../../context/CreateQnaDataContext";
const CreateQnaCategoryLabel = styled.label`
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0;
`;
const CreateQnaCategorySelectBox = styled.div`
  border-color: #64748b;
  background-color: #fff;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  position: relative;
`;
const CreateQnaCategorySelectBtn = styled.button`
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CreateQnaCategorySelectBtnText = styled.span`
  color: #0f172a;
  font-size: 1rem;
`;
const CreateQnaCategorySelectBtnSvg = styled.svg`
  fill: #64748b;
  width: 0.75rem;
  height: 0.75rem;
`;
const CategoryListBox = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;
const CategoryList = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 0.25rem;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  max-height: 210px;
  overflow-y: scroll;
  font-size: 14.5px;
  border: 1px solid #c3cad8;
  background-color: #fff;
`;
const CategoryItem = styled.li`
  padding: 15px;
  width: 100%;
  color: #000;
  font-weight: 500;
  &:hover {
    background-color: #edf0f5;
  }
`;

function CategorySelect() {
  const [showBox, setShowBox] = useState(false);
  const { datas, setDatas } = useContext(CreateQnaDataContext);
  const categoryRef = useRef(null);

  const handleSelectOpen = () => {
    setShowBox(true);
  };

  const handleSelected = (item) => {
    setDatas((prev) => ({
      ...prev,
      category: item,
    }));
    setShowBox(false);
  };

  const handleClickOutside = (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setShowBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <CreateQnaCategoryLabel htmlFor="category">
        카테고리 <CreateQnaPilsu>(필수)</CreateQnaPilsu>
      </CreateQnaCategoryLabel>
      <CreateQnaCategorySelectBox ref={categoryRef}>
        <CreateQnaCategorySelectBtn type="button" onClick={handleSelectOpen}>
          <CreateQnaCategorySelectBtnText>
            {datas.category}
          </CreateQnaCategorySelectBtnText>
          <CreateQnaCategorySelectBtnSvg
            width={24}
            height={24}
            strokeWidth={0}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g id="style=outline">
                <path
                  id="arrowDown"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 15.5858L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289C2.68342 6.90237 3.31658 6.90237 3.70711 7.29289L12 15.5858Z"
                />
              </g>
            </g>
          </CreateQnaCategorySelectBtnSvg>
        </CreateQnaCategorySelectBtn>
        {showBox && (
          <CategoryListBox>
            <CategoryList>
              {categoryList.map((item) => (
                <CategoryItem key={item} onClick={() => handleSelected(item)}>
                  {item}
                </CategoryItem>
              ))}
            </CategoryList>
          </CategoryListBox>
        )}
      </CreateQnaCategorySelectBox>
    </>
  );
}

export default CategorySelect;
