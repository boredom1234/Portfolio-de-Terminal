import styled from "styled-components";

export const SkillsWrapper = styled.div``;

export const CategoryTitle = styled.div`
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const SkillList = styled.ul`
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  list-style-type: disc;
  line-height: 1.5rem;
`;

export const SkillItem = styled.li`
  color: ${({ theme }) => theme.colors?.text[200]};
`;
