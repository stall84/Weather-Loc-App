export declare class MapController {
    formElement: HTMLFormElement;
    divElement: HTMLElement;
    searchInput: HTMLTextAreaElement;
    docHead: HTMLHeadElement;
    mapScript: HTMLScriptElement;
    constructor();
    addSubmitHandler(): void;
    searchAddressHandler(event: Event): void;
}
