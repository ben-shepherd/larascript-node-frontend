export type IHeaderVisibleParts = {
    showTitle?: boolean;
    showSubTitle?: boolean;
    showButtons?: boolean;
    showBetaWarning?: boolean;
    showArrowDown?: boolean;
    showAbstractLines?: boolean;
}
export type IHeaderButton = {
    text: string,
    to: string,
    target?: string
    asAnchorElement?: boolean;
    showGitHubModal?: boolean;
}

export type IHeader = {
    title?: string
    subTitle?: string;
    buttons: IHeaderButton[];
    visibleParts: IHeaderVisibleParts;
    addtionalClassNames?: string;
}