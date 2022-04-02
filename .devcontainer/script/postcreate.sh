#!/bin/env bash

# Install antigen and add to zshrc
curl -L git.io/antigen > ~/.antigen.zsh
sed -i 's/\$_ANTIGEN_INSTALL_DIR\/antigen\.zsh/\$_ANTIGEN_INSTALL_DIR\/\.antigen\.zsh/' ~/.antigen.zsh

cat << EOF >> ~/.zshrc

source ~/.antigen.zsh

antigen use oh-my-zsh   

antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-syntax-highlighting

antigen apply

EOF

# Install zsh-completions
git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-completions
sed -i "s|^plugins=(.*)|plugins=(git systemd ubuntu zsh_reload sudo history zsh-completions)\nautoload \-U compinit \&\& compinit|g" ~/.zshrc

## append on plugins
# VARTEMP=$(egrep '^plugins=\(.*\)' ~/.zshrc | tr ")" ' ')
# sed -i "s|^plugins=(.*)|${VARTEMP} zsh-completions)\nautoload \-U compinit \&\& compinit|g" ~/.zshrc

exit 0