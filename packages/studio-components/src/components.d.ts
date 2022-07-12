/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PcDropdown {
        /**
          * Where to append element
         */
        "appendTo": 'body' | 'current';
        /**
          * Should dropdown autoclose on changeValue
         */
        "autoClose": boolean;
        "autoFocus": boolean;
        "autocomplete": boolean;
        /**
          * Filter value
         */
        "currentFilter": any;
        /**
          * Define object mapping for id/value
         */
        "dataId": string;
        /**
          * Define object mapping for labels
         */
        "dataLabel": string;
        /**
          * Change value
         */
        "doChange": (val: any, originalEvent?: MouseEvent) => Promise<void>;
        /**
          * Close dropdown
         */
        "doClose": (isDisconnected?: boolean) => Promise<void>;
        /**
          * Open dropdown
         */
        "doOpen": () => Promise<void>;
        /**
          * Filter criteria
         */
        "filter": 'contains' | 'start';
        "hasFilter": boolean;
        "maxHeight": number;
        /**
          * Placeholder text
         */
        "placeholder": string;
        /**
          * Define object mapping for id/value
         */
        "source": any[];
        /**
          * Selected value
         */
        "value": any;
    }
    interface PcDropdownListItem {
        /**
          * Define object mapping for labels
         */
        "dataLabel": string;
        "isFocused": boolean;
        "refresh": (source: any[]) => Promise<void>;
        /**
          * Define object mapping for id/value
         */
        "sourceItems": any[];
    }
    interface PcEditor {
        "initialValue": string;
        "setCapo": (capoPosition: number) => Promise<void>;
    }
    interface PcEditorCapoDropdown {
    }
    interface PcEditorKeyDropdown {
    }
    interface PcEditorModeDropdown {
    }
    interface PcEditorSplitView {
    }
    interface PcRenderer {
        "html": string;
        "mode": string;
    }
}
export interface PcDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPcDropdownElement;
}
export interface PcDropdownListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPcDropdownListItemElement;
}
declare global {
    interface HTMLPcDropdownElement extends Components.PcDropdown, HTMLStencilElement {
    }
    var HTMLPcDropdownElement: {
        prototype: HTMLPcDropdownElement;
        new (): HTMLPcDropdownElement;
    };
    interface HTMLPcDropdownListItemElement extends Components.PcDropdownListItem, HTMLStencilElement {
    }
    var HTMLPcDropdownListItemElement: {
        prototype: HTMLPcDropdownListItemElement;
        new (): HTMLPcDropdownListItemElement;
    };
    interface HTMLPcEditorElement extends Components.PcEditor, HTMLStencilElement {
    }
    var HTMLPcEditorElement: {
        prototype: HTMLPcEditorElement;
        new (): HTMLPcEditorElement;
    };
    interface HTMLPcEditorCapoDropdownElement extends Components.PcEditorCapoDropdown, HTMLStencilElement {
    }
    var HTMLPcEditorCapoDropdownElement: {
        prototype: HTMLPcEditorCapoDropdownElement;
        new (): HTMLPcEditorCapoDropdownElement;
    };
    interface HTMLPcEditorKeyDropdownElement extends Components.PcEditorKeyDropdown, HTMLStencilElement {
    }
    var HTMLPcEditorKeyDropdownElement: {
        prototype: HTMLPcEditorKeyDropdownElement;
        new (): HTMLPcEditorKeyDropdownElement;
    };
    interface HTMLPcEditorModeDropdownElement extends Components.PcEditorModeDropdown, HTMLStencilElement {
    }
    var HTMLPcEditorModeDropdownElement: {
        prototype: HTMLPcEditorModeDropdownElement;
        new (): HTMLPcEditorModeDropdownElement;
    };
    interface HTMLPcEditorSplitViewElement extends Components.PcEditorSplitView, HTMLStencilElement {
    }
    var HTMLPcEditorSplitViewElement: {
        prototype: HTMLPcEditorSplitViewElement;
        new (): HTMLPcEditorSplitViewElement;
    };
    interface HTMLPcRendererElement extends Components.PcRenderer, HTMLStencilElement {
    }
    var HTMLPcRendererElement: {
        prototype: HTMLPcRendererElement;
        new (): HTMLPcRendererElement;
    };
    interface HTMLElementTagNameMap {
        "pc-dropdown": HTMLPcDropdownElement;
        "pc-dropdown-list-item": HTMLPcDropdownListItemElement;
        "pc-editor": HTMLPcEditorElement;
        "pc-editor-capo-dropdown": HTMLPcEditorCapoDropdownElement;
        "pc-editor-key-dropdown": HTMLPcEditorKeyDropdownElement;
        "pc-editor-mode-dropdown": HTMLPcEditorModeDropdownElement;
        "pc-editor-split-view": HTMLPcEditorSplitViewElement;
        "pc-renderer": HTMLPcRendererElement;
    }
}
declare namespace LocalJSX {
    interface PcDropdown {
        /**
          * Where to append element
         */
        "appendTo"?: 'body' | 'current';
        /**
          * Should dropdown autoclose on changeValue
         */
        "autoClose"?: boolean;
        "autoFocus"?: boolean;
        "autocomplete"?: boolean;
        /**
          * Filter value
         */
        "currentFilter"?: any;
        /**
          * Define object mapping for id/value
         */
        "dataId"?: string;
        /**
          * Define object mapping for labels
         */
        "dataLabel"?: string;
        /**
          * Filter criteria
         */
        "filter"?: 'contains' | 'start';
        "hasFilter"?: boolean;
        "maxHeight"?: number;
        /**
          * When value changed
         */
        "onChanged"?: (event: PcDropdownCustomEvent<{ val: any; originalEvent?: MouseEvent }>) => void;
        /**
          * Before element close, can be prevented
         */
        "onClose"?: (event: PcDropdownCustomEvent<any>) => void;
        /**
          * Before element open, can be prevented
         */
        "onOpen"?: (event: PcDropdownCustomEvent<any>) => void;
        /**
          * Placeholder text
         */
        "placeholder"?: string;
        /**
          * Define object mapping for id/value
         */
        "source"?: any[];
        /**
          * Selected value
         */
        "value"?: any;
    }
    interface PcDropdownListItem {
        /**
          * Define object mapping for labels
         */
        "dataLabel"?: string;
        "isFocused"?: boolean;
        "onChanged"?: (event: PcDropdownListItemCustomEvent<{ item: any; e: any }>) => void;
        /**
          * Define object mapping for id/value
         */
        "sourceItems"?: any[];
    }
    interface PcEditor {
        "initialValue"?: string;
    }
    interface PcEditorCapoDropdown {
    }
    interface PcEditorKeyDropdown {
    }
    interface PcEditorModeDropdown {
    }
    interface PcEditorSplitView {
    }
    interface PcRenderer {
        "html"?: string;
        "mode"?: string;
    }
    interface IntrinsicElements {
        "pc-dropdown": PcDropdown;
        "pc-dropdown-list-item": PcDropdownListItem;
        "pc-editor": PcEditor;
        "pc-editor-capo-dropdown": PcEditorCapoDropdown;
        "pc-editor-key-dropdown": PcEditorKeyDropdown;
        "pc-editor-mode-dropdown": PcEditorModeDropdown;
        "pc-editor-split-view": PcEditorSplitView;
        "pc-renderer": PcRenderer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pc-dropdown": LocalJSX.PcDropdown & JSXBase.HTMLAttributes<HTMLPcDropdownElement>;
            "pc-dropdown-list-item": LocalJSX.PcDropdownListItem & JSXBase.HTMLAttributes<HTMLPcDropdownListItemElement>;
            "pc-editor": LocalJSX.PcEditor & JSXBase.HTMLAttributes<HTMLPcEditorElement>;
            "pc-editor-capo-dropdown": LocalJSX.PcEditorCapoDropdown & JSXBase.HTMLAttributes<HTMLPcEditorCapoDropdownElement>;
            "pc-editor-key-dropdown": LocalJSX.PcEditorKeyDropdown & JSXBase.HTMLAttributes<HTMLPcEditorKeyDropdownElement>;
            "pc-editor-mode-dropdown": LocalJSX.PcEditorModeDropdown & JSXBase.HTMLAttributes<HTMLPcEditorModeDropdownElement>;
            "pc-editor-split-view": LocalJSX.PcEditorSplitView & JSXBase.HTMLAttributes<HTMLPcEditorSplitViewElement>;
            "pc-renderer": LocalJSX.PcRenderer & JSXBase.HTMLAttributes<HTMLPcRendererElement>;
        }
    }
}
