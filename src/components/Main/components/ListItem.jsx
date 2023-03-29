import { useCallback } from "react";
import styled from "styled-components";
import star from "../../../imgs/main/star.png";
import halfStar from "../../../imgs/main/half-star.png";
import emptyStar from "../../../imgs/main/empty_star.png";
// TODO change color of background for call.png
import call from "../../../imgs/main/call.png";

export default function ListItem({ name, description, metaData, rating = 0 }) {
  const phone = metaData?.Phones?.[0].formatted;
  const hours = metaData?.Hours?.text;

  const fillStars = useCallback(
    (arr) => {
      let starsToDraw = 5 - Math.trunc(rating);
      for (let i = 0; i < Math.trunc(rating); i++) {
        arr.push(star);
      }
      if (rating % 1 > 0.3) {
        arr.push(halfStar);
        starsToDraw -= 1;
      }
      for (let i = 0; i < starsToDraw; i++) {
        arr.push(emptyStar);
      }
      return arr;
    },
    [rating]
  );

  function handleClick() {
    // TODO this must hide map and render page of car washer
  }

  const starsArr = fillStars([]);

  console.log(metaData);
  return (
    <StyledListContainer onClick={handleClick}>
      <StyledContent>
        <p>
          <b>{name}</b>
        </p>
        <p>Адрес: {description}</p>
        {phone && (
          <StyledPhone>
            <img src={call} alt="номер телефона: " />
            <span>{phone}</span>
          </StyledPhone>
        )}
        <p>{hours}</p>
        <StyledRating>
          {starsArr.map((star) => {
            return <img src={star} alt="star" />;
          })}
          <span>{rating}</span>
        </StyledRating>
      </StyledContent>
      <StyledButtons>
        <button className="book">записаться</button>
        <button className="more">подробнее</button>
      </StyledButtons>
    </StyledListContainer>
  );
}

const StyledListContainer = styled.li`
  all: unset;
  padding-left: 10px;
  padding-right: 0px;
  display: flex;
  position: relative;
  border-bottom: 1px solid rgb(153, 230, 235);
`;

const StyledContent = styled.div`
  width: 100%;
`;

const StyledRating = styled.div`
  display: flex;

  span {
    margin-left: 5px;
  }

  img {
    width: 20px;
    padding-bottom: 5px;
  }
`;

const StyledPhone = styled.div`
  padding-bottom: 5px;
  display: flex;
  gap: 10px;
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  /* position: absolute; */
  gap: 5px;

  button {
    all: unset;
    cursor: pointer;
    align-self: flex-end;
    height: 30px;
    width: 100px;
    text-align: center;
    border-radius: 12px;
    padding: 5px;
    margin-bottom: 15px;
    margin-right: 15px;
  }

  .book {
    background-color: rgb(153, 230, 235);
    color: #fff;
  }

  .more {
    background-color: rgb(231, 237, 237);
  }
`;
