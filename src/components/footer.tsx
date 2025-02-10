// src/components/footer.tsx

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900/50">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Restez informé des dernières fonctionnalités et mises à jour
            </p>
            <form className="flex max-w-sm gap-2 mt-4">
              <Input type="email" placeholder="Votre email" className="max-w-[240px]" />
              <Button type="submit">S&apos;abonner</Button>
            </form>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Produit</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Démonstration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Contact commercial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-sm text-center border-t text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dentia Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

