export type ConsentCategory = 'analytics' | 'preferences';

export type Consent = Record<ConsentCategory, boolean>;

const STORAGE_KEY = 'cookie-consent';

function getStorage(): Storage | null {
	try {
		return typeof localStorage === 'undefined' ? null : localStorage;
	} catch {
		return null;
	}
}

export function getConsent(): Consent | null {
	const storage = getStorage();
	if (!storage) return null;

	const raw = storage.getItem(STORAGE_KEY);
	if (!raw) return null;

	try {
		const parsed = JSON.parse(raw) as Partial<Consent>;
		if (typeof parsed.analytics !== 'boolean' || typeof parsed.preferences !== 'boolean') {
			return null;
		}
		return { analytics: parsed.analytics, preferences: parsed.preferences };
	} catch {
		return null;
	}
}

export function setConsent(consent: Consent): void {
	const storage = getStorage();
	if (!storage) return;

	storage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function hasConsent(category: ConsentCategory): boolean {
	return getConsent()?.[category] ?? false;
}