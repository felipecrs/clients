import AutofillField from "../../models/autofill-field";
import AutofillForm from "../../models/autofill-form";
import AutofillPageDetails from "../../models/autofill-page-details";
import { ElementWithOpId, FormFieldElement } from "../../types";

type AutofillFormElements = Map<ElementWithOpId<HTMLFormElement>, AutofillForm>;

type AutofillFieldElements = Map<ElementWithOpId<FormFieldElement>, AutofillField>;

type AttributeUpdateParams = {
  element: ElementWithOpId<HTMLFormElement | FormFieldElement>;
  attributeName: string;
  dataTarget?: AutofillForm | AutofillField;
  dataTargetKey?: string;
};

interface CollectAutofillContentService {
  getPageDetails(): Promise<AutofillPageDetails>;
  getAutofillFieldElementByOpid(opid: string): HTMLElement | null;
}

export {
  AutofillFormElements,
  AutofillFieldElements,
  AttributeUpdateParams,
  CollectAutofillContentService,
};