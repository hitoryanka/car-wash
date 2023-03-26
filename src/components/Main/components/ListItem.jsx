import { useCallback } from "react";
import styled from "styled-components";
import star from "../../../imgs/main/star.png";
import halfStar from "../../../imgs/main/half-star.png";
import call from "../../../imgs/main/call.png";

export default function ListItem({ name, description, metaData, rating }) {
  const phone = metaData?.Phones?.[0].formatted;
  const hours = metaData?.Hours?.text;

  const fillStars = useCallback(
    (arr) => {
      for (let i = 0; i < Math.trunc(rating); i++) {
        arr.push(star);
      }
      return arr;
    },
    [rating]
  );

  const starsArr = fillStars([]);

  console.log(metaData);
  return (
    <StyledListContainer>
      <StyledContent>
        <p>{name}</p>
        <p>Адресс: {description}</p>
        {phone && (
          <StyledPhone>
            <img src={call} alt="номер телефона: " />
            <span>{phone}</span>
          </StyledPhone>
        )}
        <StyledRating>
          {starsArr.map((star) => {
            return <img src={star} alt="star" />;
          })}
          {rating > 4.3 && <img src={halfStar} alt="half-star" />}
          <span>{rating}</span>
        </StyledRating>
      </StyledContent>
    </StyledListContainer>
  );
}

const StyledListContainer = styled.li`
  all: unset;
`;

const StyledContent = styled.div`
  padding-left: 10px;
  border-bottom: 1px solid rgb(153, 230, 235);
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
