"use client"

import * as React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Code, Check, Smile } from "lucide-react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function TemplatePage() {
  const [isGen, setIsGen] = React.useState(false)
  const [isCopy, setIsCopy] = React.useState(false)
  const codeString = `import pytest
import allure


@allure.epic("xxx")
@allure.feature("xxx")
@allure.story("xxx")
@allure.title("xxx")
@allure.severity(allure.severity_level.BLOCKER)
@pytest.mark.xdist_group("xxx")
def test_xxx():
    ...
    `

  return <div className="space-y-4 pt-4">
    <div className="flex justify-start space-x-2">
      <Input type="file" className="hover:bg-accent hover:text-accent-foreground max-w-[170px]" />
      <Button size="icon" onClick={() => { setIsGen(true), setIsCopy(false) }}>{isGen ? <Smile /> : <Code />}</Button>
      <CopyToClipboard text={codeString} onCopy={() => { setIsCopy(true), setIsGen(false) }}>
        <Button variant="outline" size="icon" onClick={() => setIsCopy(!isCopy)}>{isCopy ? <Check /> : <Copy />}</Button>
      </CopyToClipboard>
    </div>
    <div className="overflow-hidden rounded-md text-sm">
      <SyntaxHighlighter language="py" style={a11yDark} showLineNumbers={true}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  </div>
}
