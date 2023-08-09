// eslint-disable-next-line no-restricted-imports
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mock } from "jest-mock-extended";

import { I18nPipe } from "@bitwarden/angular/platform/pipes/i18n.pipe";
import { ModalService } from "@bitwarden/angular/services/modal.service";
import { OrganizationService } from "@bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction";
import { I18nService } from "@bitwarden/common/platform/abstractions/i18n.service";
import { MessagingService } from "@bitwarden/common/platform/abstractions/messaging.service";
import { CipherService } from "@bitwarden/common/vault/abstractions/cipher.service";
import { PasswordRepromptService } from "@bitwarden/common/vault/abstractions/password-reprompt.service";

import { cipherData } from "./reports-ciphers.mock";
import { ReusedPasswordsReportComponent } from "./reused-passwords-report.component";

describe("ReusedPasswordsReportComponent", () => {
  let component: ReusedPasswordsReportComponent;
  let fixture: ComponentFixture<ReusedPasswordsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusedPasswordsReportComponent, I18nPipe],
      providers: [
        {
          provide: CipherService,
          useValue: mock<CipherService>(),
        },
        {
          provide: OrganizationService,
          useValue: mock<OrganizationService>(),
        },
        {
          provide: ModalService,
          useValue: mock<ModalService>(),
        },
        {
          provide: MessagingService,
          useValue: mock<MessagingService>(),
        },
        {
          provide: PasswordRepromptService,
          useValue: mock<PasswordRepromptService>(),
        },
        {
          provide: I18nService,
          useValue: mock<I18nService>(),
        },
      ],
      schemas: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusedPasswordsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should initialize component", () => {
    expect(component).toBeTruthy();
  });

  it('should get ciphers with reused passwords that the user has "Can Edit" access to', async () => {
    const expectedIdOne: any = "cbea34a8-bde4-46ad-9d19-b05001228ab6";
    const expectedIdTwo = "cbea34a8-bde4-46ad-9d19-b05001228cd7";
    jest.spyOn(component, "getAllCiphers").mockReturnValue(Promise.resolve<any>(cipherData));
    await component.setCiphers();

    expect(component.ciphers.length).toEqual(2);
    expect(component.ciphers[0].id).toEqual(expectedIdOne);
    expect(component.ciphers[1].id).toEqual(expectedIdTwo);
  });
});
