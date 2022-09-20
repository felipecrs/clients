import { Observable } from "rxjs";

import { TreeNode } from "@bitwarden/common/models/domain/treeNode";

import {
  CipherTypeFilter,
  CollectionFilter,
  FolderFilter,
  OrganizationFilter,
} from "./cipher-filter.model";

export type VaultFilterType =
  | OrganizationFilter
  | CipherTypeFilter
  | FolderFilter
  | CollectionFilter;

export enum VaultFilterLabel {
  OrganizationFilter = "organizationFilter",
  TypeFilter = "typeFilter",
  FolderFilter = "folderFilter",
  CollectionFilter = "collectionFilter",
  TrashFilter = "trashFilter",
}

export type VaultFilterSection = {
  data$: Observable<TreeNode<VaultFilterType>>;
  header: {
    showHeader: boolean;
    isSelectable: boolean;
    defaultSelection?: boolean;
  };
  action: (filterNode: TreeNode<VaultFilterType>) => Promise<void>;
  edit?: {
    text: string;
    action: (filter: VaultFilterType) => void;
  };
  add?: {
    text: string;
    route?: string;
    action?: () => void;
  };
  options?: {
    component: any;
  };
  divider?: boolean;
};

export type VaultFilterList = {
  [key in VaultFilterLabel]?: VaultFilterSection;
};