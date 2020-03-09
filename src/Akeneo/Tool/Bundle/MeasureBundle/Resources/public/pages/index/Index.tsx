import React, {useContext} from 'react';
import styled from 'styled-components';
import {PageHeader} from 'akeneomeasure/shared/components/PageHeader';
import {PageContent} from 'akeneomeasure/shared/components/PageContent';
import {PimView} from 'akeneomeasure/shared/legacy/pim-view/PimView';
import {Breadcrumb} from 'akeneomeasure/shared/components/Breadcrumb';
import {BreadcrumbItem} from 'akeneomeasure/shared/components/BreadcrumbItem';
import {TranslateContext} from 'akeneomeasure/shared/translate/translate-context';

const Helper = styled.div``;
const List = styled.div``;
const SearchBar = styled.div``;
const TableHeader = styled.div``;
const TableBody = styled.div``;
const Table = styled.div``;
const SearchInput = styled.div``;
const ResultCount = styled.div``;

export const Index = () => {
  const __ = useContext(TranslateContext);

  return (
    <>
      <PageHeader
        userButtons={
          <PimView
            className="AknTitleContainer-userMenuContainer AknTitleContainer-userMenu"
            viewName="pim-measurements-user-navigation"
          />
        }
        breadcrumb={
          <Breadcrumb>
            <BreadcrumbItem>{__('pim_menu.tab.settings')}</BreadcrumbItem>
            <BreadcrumbItem>{__('pim_menu.item.measurements')}</BreadcrumbItem>
          </Breadcrumb>
        }
      >
        {__('measurements.families', {itemsCount: '0'}, 0)}
      </PageHeader>

      <PageContent>
        <Helper>🍆</Helper>
        <List>
          <SearchBar>
            <SearchInput></SearchInput>
            <ResultCount></ResultCount>
          </SearchBar>
          <Table>
            <TableHeader></TableHeader>
            <TableBody></TableBody>
          </Table>
        </List>
      </PageContent>
    </>
  );
};
