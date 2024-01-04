import { SearchOutlinedIcon, Searchbar, SearchbarInput } from './Searchbars.styles';

export default function Searchbars(props: any): JSX.Element {
  return (
    <Searchbar>
      <SearchOutlinedIcon rev={undefined} />
      <SearchbarInput placeholder="검색어를 입력해 주세요." onChange={props.handleSearchChange} />
    </Searchbar>
  );
}
