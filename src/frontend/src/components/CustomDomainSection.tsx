import { useState } from 'react';
import { Globe, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

export default function CustomDomainSection() {
  const [domain, setDomain] = useState('');
  const [canisterId, setCanisterId] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  const handleGenerateInstructions = () => {
    if (domain.trim() && canisterId.trim()) {
      setShowInstructions(true);
    }
  };

  const resetForm = () => {
    setDomain('');
    setCanisterId('');
    setShowInstructions(false);
  };

  return (
    <section id="custom-domain" className="section-padding relative z-10">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white/95 backdrop-blur-sm border-rose-200 shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Globe className="h-12 w-12 text-rose-600" />
            </div>
            <CardTitle className="text-3xl font-serif text-rose-900">
              Custom Domain Setup
            </CardTitle>
            <CardDescription className="text-lg text-rose-700">
              Connect your own domain to this Valentine's page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!showInstructions ? (
              <>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="domain" className="text-rose-900 font-medium">
                      Your Domain
                    </Label>
                    <Input
                      id="domain"
                      type="text"
                      placeholder="example.com"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                    <p className="text-sm text-rose-600">
                      Enter the domain you want to use (e.g., mylove.com or valentine.example.com)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="canisterId" className="text-rose-900 font-medium">
                      Frontend Canister ID
                    </Label>
                    <Input
                      id="canisterId"
                      type="text"
                      placeholder="xxxxx-xxxxx-xxxxx-xxxxx-xxx"
                      value={canisterId}
                      onChange={(e) => setCanisterId(e.target.value)}
                      className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                    <p className="text-sm text-rose-600">
                      Your deployed frontend canister ID from the Internet Computer
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleGenerateInstructions}
                  disabled={!domain.trim() || !canisterId.trim()}
                  className="w-full button-romantic text-lg py-6"
                >
                  Generate DNS Instructions
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-6">
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-serif font-semibold text-rose-900 flex items-center gap-2">
                      <span className="text-2xl">📋</span>
                      Step-by-Step DNS Configuration
                    </h3>
                    
                    <Separator className="bg-rose-200" />

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-rose-900 mb-2">Step 1: Log in to your domain registrar</h4>
                        <p className="text-sm text-rose-700">
                          Access your domain's DNS settings through your registrar's control panel (e.g., GoDaddy, Namecheap, Cloudflare, etc.)
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-rose-900 mb-2">Step 2: Add CNAME Record</h4>
                        <div className="bg-white rounded border border-rose-200 p-4 space-y-2 font-mono text-sm">
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <span className="text-rose-600 font-semibold">Type:</span>
                              <p className="text-rose-900">CNAME</p>
                            </div>
                            <div>
                              <span className="text-rose-600 font-semibold">Name/Host:</span>
                              <p className="text-rose-900 break-all">{domain.startsWith('www.') ? 'www' : '@'}</p>
                            </div>
                            <div>
                              <span className="text-rose-600 font-semibold">Value/Target:</span>
                              <p className="text-rose-900 break-all">{canisterId}.icp0.io</p>
                            </div>
                          </div>
                          <div>
                            <span className="text-rose-600 font-semibold">TTL:</span>
                            <p className="text-rose-900">3600 (or Auto)</p>
                          </div>
                        </div>
                        <p className="text-sm text-rose-700 mt-2">
                          Note: If using a root domain (without www), some registrars require ALIAS or ANAME records instead of CNAME.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-rose-900 mb-2">Step 3: Configure Internet Computer Boundary Node</h4>
                        <p className="text-sm text-rose-700 mb-2">
                          Register your custom domain with the Internet Computer boundary nodes:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-rose-700 ml-2">
                          <li>Visit the <a href="https://internetcomputer.org/docs/current/developer-docs/production/custom-domain/" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-900">IC Custom Domain documentation</a></li>
                          <li>Follow the registration process for your canister ID: <code className="bg-white px-2 py-0.5 rounded border border-rose-200 font-mono text-xs">{canisterId}</code></li>
                          <li>Submit your domain: <code className="bg-white px-2 py-0.5 rounded border border-rose-200 font-mono text-xs">{domain}</code></li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-serif font-semibold text-green-900 flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6" />
                      Verification Checklist
                    </h3>
                    
                    <Separator className="bg-green-200" />

                    <ul className="space-y-3 text-sm text-green-800">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span><strong>Wait for DNS propagation:</strong> Changes can take 5 minutes to 48 hours depending on your registrar and TTL settings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span><strong>Check DNS records:</strong> Use a tool like <a href="https://dnschecker.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-900">dnschecker.org</a> to verify your CNAME record is live globally.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span><strong>Test in browser:</strong> Visit <code className="bg-white px-2 py-0.5 rounded border border-green-200 font-mono">https://{domain}</code> to confirm the page loads correctly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span><strong>Verify HTTPS:</strong> Ensure the page loads with a valid SSL certificate (may take additional time after DNS propagation).</span>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <a
                        href={`https://${domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Test your domain: {domain}
                      </a>
                    </div>
                  </div>

                  <Button
                    onClick={resetForm}
                    variant="outline"
                    className="w-full border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300"
                  >
                    Configure Another Domain
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
